# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170930205040) do

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.string "set"
    t.string "number"
    t.string "pokemontype"
    t.integer "hp"
    t.string "stage"
    t.integer "retreat"
    t.string "rarity"
    t.string "dtype"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cube_cards", force: :cascade do |t|
    t.integer "card_id"
    t.string "image"
    t.integer "cube_id"
    t.text "tags"
    t.string "pimp"
    t.string "rarity"
    t.boolean "side"
    t.datetime "timestamps"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cube_id"], name: "index_cube_cards_on_cube_id"
  end

  create_table "cubes", force: :cascade do |t|
    t.string "name"
    t.integer "owner"
    t.text "description"
    t.boolean "has_img"
    t.boolean "private"
    t.datetime "create_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.date "dob"
    t.binary "perms"
    t.datetime "account_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
