require 'httparty'

class ThrowsService
  THROWS_LINK = "https://private-anon-8cde3772e8-curbrockpaperscissors.apiary-mock.com/rps-stage/throw"
  POSSIBLE_THROWS = %w(rock paper scissors)

  def initialize(action:)
    @action = action
  end

  def determine_result
    result = begin
      self.check_for_api_result
    rescue HTTParty::Error
      self.generate_throw
    end

    possible_results = {}

    case @action
    when 'rock'
      possible_results[:win] = result == 'scissors'
      possible_results[:draw] = result == 'rock'
      possible_results[:lost] = result == 'paper'
    when 'scissors'
      possible_results[:win] = result == 'paper'
      possible_results[:draw] = result == 'scissors'
      possible_results[:lost] = result == 'rock'
    when 'paper'
      possible_results[:win] = result == 'rock'
      possible_results[:draw] = result == 'paper'
      possible_results[:lost] = result == 'scissors'
    else
      possible_results[:undetermined] = true
    end

    outcome = possible_results.select { |k, v| v.present? }.keys.first.to_s

    {
      generated_throw: result,
      outcome: outcome
    }
  end

  private

  def check_for_api_result
    response = HTTParty.get(THROWS_LINK)

    raise HTTParty::Error unless response.code == 200

    json = JSON.parse(response.body)
    json['body']
  end

  def generate_throw
    POSSIBLE_THROWS[Random.rand(3)]
  end
end