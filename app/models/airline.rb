# frozen_string_literal: true

class Airline < ApplicationRecord
  has_many :reviews, dependent: :destroy

  before_create :slugfy

  def slugfy
    self.slug = name.parameterize
  end

  def avg_score
    reviews.average(:score).round(2).to_f
  end
end
