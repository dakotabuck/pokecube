class AddDobToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :dob, :date
    add_column :users, :perms, :binary
    add_column :users, :account_date, :datetime
  end
end
