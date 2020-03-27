# Skills Terrain Journal (wip) 

### [Try out skills terrain journal!]()

## Background and Overview
This is a data visualization prototype experience where users to create their own skills terrain. User areas of interest, skills and abilities form regions on a 3-dimensional landscape representing relationships and degree of exploration.

* Areas more extensively explored are higher in elevation / more resolved
* Areas of broad interest/ nascent exploration are broader in elevation / less resolved.

As users journal or add entries, the map grows / changes. Possible use cases: 
  * Map out relationships between your skills, interests, hobbies
  * Chart out areas of growth to accomplish a goal
  * Map out a topic and chart out relationships between sub-areas of a topic

## Functionality and Features

## Screens
### Chart out "regions" (skills, competencies) 

* Create an interest area (or select from a list?) and add to a list. E.g.:
  * Map out relationships between your skills, interests, hobbies
  * Chart out areas of growth to accomplish a goal
  * Reflect on your academic studies and relationships between those areas
  * Chart out relationships between sub-areas of a topic
  
### Map relationships between regions 

* Actions: 
  * User can drag regions around to indicate relatedness, proximity in region.
  * User can overlap / merge regions
  * User can hold and drag down to increase the size of a region to indicate strength, depth, etc.

* Save the relationships as a 2D graph

### Visualize in 3D landscape 

* User can see these regions mapped out in a 3D terrain where:
  * Broad distances represent relatedness
  * Size represents depth, strength
  * Merging, overlapping regions share a common color. 

### Journal / document an event in the region. 

* User can visit the map and add journal entries for each region

## Technologies and Technical Challenges

This project will be built on a MongoDB, Mongoose, Express backend, with a React / Redux frontend and three.js for data visualization. React Hooks, Styled Components and an overall componentized structure throughout this project.

### Technical Challenges


