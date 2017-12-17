1. **Index** (*Path: /*): A landing page
2. **Log In / Register** (*Path: /login, /register*)
3. **Profile** (*Path: /profile/<id>*): Perhaps display a list of published cubes and blog posts by the user (on the index, this link links to the logged in user's profile)
  1. **Edit Profile** (*Path: /profile/edit*)
4. **My Cubes** (*Path: /cubes*): A list of all cubes owned by the current user
  1. **New Cube** (*Path: /cubes/new*): Serves form for creating a new blank cube
  2. **Manage Cubes** (*Path: /cubes/edit*): Serves alternative of */cubes* with editing (delete, archive, lock) functionality
  3. **Show Cube** (*Path: /cube/<id>*): View the card list of a cube. Also manage the list of a cube you own
    1. **Show Card** (*Path: /cube/<id>/cube_card/<id>*): Show special notes written about a specific card. Usually, this will be presented inline on */cube/<id>*\
    2. **Edit Card** (*Path: /cube/<id>/cube_card/<id>*): Edit card (custom scan, description, notes, rarity, or cube position e.g. *Stage 2 Line - Stage 1*)
    3. **Add Card** (*Path: /cube/<id> menu option*): Add a card to the current cube by search or card ID
    4. **Delete Card** (*Path: /cube/<id>, select card, click delete*)
5. **Browse / Search Public Cubes** (*Path: /cubes/search*): Search or browse all cubes current *published*
6. **FAQ** (*Path: /faq*): FAQ for questions like "what is a cube?"
7. **About / Legal** (*Path: /about*):  
