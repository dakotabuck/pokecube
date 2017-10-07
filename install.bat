@bundle install
@rake db:migrate
@echo "DB Migrate OK!"
@echo "Adding Card Records to Database (this may take a while)"
@rails r app/assets/parsexml.rb
@echo "Complete! Press any key to continue..."
@pause
