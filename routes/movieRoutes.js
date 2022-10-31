import express from 'express';
import fetch from 'node-fetch';


const fetch = require('node-fetch');

const url = 'https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '11fb2e648emshff0f511bd987be4p197887jsne25c60c996d9',
    'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
  
const router = express.Router();

//
// This is a demo of how to structure your final project API
// One route file is expected per student, with appropriate HTTP methods on each endpoint
//

// /////////////////////////////////
// Food Inspection Set Demos
// /////////////////////////////////
router.route('/movieRoutes') // actually localhost:3000/api/foodServicesPG
  .get(async (req, res) => {
    try {
        const url = 'https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666';

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '11fb2e648emshff0f511bd987be4p197887jsne25c60c996d9',
            'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
          }
        };
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);

      res.json({data: json});
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put movieRoutes endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post movieRoutes endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete movieRoutes endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

router.route('/foodServicesPG/:zipCode') // actually localhost:3000/api/foodServicesPG/20782
  .get(async (req, res) => {
    try {
        const url = 'https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666';

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '11fb2e648emshff0f511bd987be4p197887jsne25c60c996d9',
            'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
          }
        };
      const request = await fetch(url);
      const json = await request.json();
      console.log(json);

      const filteredList = json.filter((item, index) => {
        const {zipCode} = req.params;
        return item.zip === zipCode;
      });

      res.json({data: filteredList});
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put FoodServices ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post FoodServices ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete FoodServices ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;