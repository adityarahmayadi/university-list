# University List App

University List App is an application that build using react js to display list of university from http://universities.hipolabs.com/ API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node
yarn
```

### Main Directory Structure

      ├── configs/    _________________________ # Webpack config
          ├── addons/   _______________________ # Webpack addons
      ├── dist/   _____________________________ # Build output
      ├── node_modules/
      ├── public/
      ├── src/
          ├── assets/   _______________________ # Assets collection
              ├── images/
              ├── styles/
          ├── context/    _____________________ # Context for state management
          ├── hooks/    _______________________ # Custom hooks
          ├── pages/
              ├── home/   _____________________ # Home page view
                  ├── components/   ___________ # Home Component
        ├── utils/    _________________________ # Utilities

### Installing

1. Clone the repo `https://github.com/adityarahmayadi/university-list.git`
2. `cd university-list`
3. `yarn install` to install package
4. start development server using `yarn start`
5. open `https://localhost:3000` 

## Built With

* [ReactJS](https://reactjs.org/) ![React](https://img.shields.io/badge/v-%5E17.0.1-blue.svg)
* [Styled Components](https://styled-components.com/) ![StyledComponents](https://img.shields.io/badge/v-%5E5.2.1-blue.svg)
* [Goods](https://github.com/goods-id/goods) ![Goods](https://img.shields.io/badge/v-%5E1.6.5-blue.svg)

## Authors

* **Aditya Rahmayadi** - *Initial work* - [adityarahmayadi](https://github.com/adityarahmayadi)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details