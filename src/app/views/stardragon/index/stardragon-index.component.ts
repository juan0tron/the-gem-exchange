import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// 3rd Party
import { default as swal} from 'sweetalert2';

// Models
import { Stardragon }      from 'app/models/stardragon';
import { StardragonTrait } from 'app/models/stardragon-trait';

// Services
import { GemExchangeAPI } from 'app/services/api.service';

@Component({
  selector:    'stardragon-index',
  templateUrl: './stardragon-index.template.html',
  providers:   [GemExchangeAPI]
})

export class StardragonIndex {

  public speciesHeaders = [
    {
      "species":"starcrafter",
      "img":    "starcrafters_header_standard.png"
    },
    {
      "species":"starfisher",
      "img":   "starfishers_header_standard.png",
    },
    {
      "species":  "stareater",
      "img": "stareaters_header_standard.png"
    },
    {
      "species":  "starrobber",
      "img": "starrobbers_header_standard.png",
    },
    {
      "species":"stardasher",
      "img":    "stardashers_header_standard.png"
    },
    {
      "species":"starshooter",
      "img": "starshooters_header_standard.png"
    },
    {
      "species":  "starweaver",
      "img": "starweavers_header_standard.png",
    },
    {
      "species":  "starsweeper",
      "img": "starsweepers_header_standard.png",
    }
  ];

  constructor(){}

  ngOnInit(){

  }
}