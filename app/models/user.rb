class User < ApplicationRecord
  has_many :ratings, :dependent => :destroy
  has_secure_password
  validates :password, length: { minimum: 6 }
  validates :username, presence: true, uniqueness: true
  validates :password_confirmation, presence: true
end
