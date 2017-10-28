# README

Welcome to the Pokemon TCG Cube Project!

To install this rails app, simply clone the directory, navigate to it and type:
> bundle install
> rails db:migrate

To do
-----
* Add columns to cube_card:
  + Stage Line (Basic only / Stage 1 line / Stage 2 line)
  + Type override (For trainer cards that favor a specific type)
* Establish database relational columns (user has many cube owners)
* Implement Heroku
* Strengthen accounts system
  + Maintain sessions through cookies
  + Add profile tables
  + Registration system with e-mail validation
* Search / Browse feature
* Shop options
* Blog options / note options
* Fave / upvote abilities

Other Notes
-----------
* You can view projected database structures [here](app/assets/database_structure.md)
