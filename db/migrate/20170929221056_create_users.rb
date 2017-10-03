class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.date :dob
      t.binary :perms
      t.datetime :account_date

      t.timestamps
    end
  end
end
