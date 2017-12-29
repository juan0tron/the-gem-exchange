import { Component, Input } from '@angular/core';

import { Stardragon } from './../../../../models/stardragon';
import { StardragonTrait } from './../../../../models/stardragon-trait';

import { GemExchangeAPI } from './../../../../../services/api.service';

@Component({
  selector:    'starshooter-traits',
  templateUrl: './starshooter-traits.template.html',
  providers:   [GemExchangeAPI]
})
export class StarshooterTraitsComponent {

  public stardragon:Stardragon;
  public img_directory = './assets/img/starshooter_traits/';

  public rarity_filter:string  = 'all';
  public type_filter:string    = 'all';
  public subtype_filter:string = 'all';

  public traits:Array<StardragonTrait> = [
    // Faces
    {
      name:   "Multiple Eyes - Vertical",
      type:   "face",
      subtype:"standard",
      rarity: "rare",
      image:  "eyes_multi1.png"
    },
    {
      name:   "Multiple Eyes - Horizontal",
      type:   "face",
      subtype:"standard",
      rarity: "rare",
      image:  "eyes_multi2.png"
    },
    {
      name:   "Facial Lynx Fluff",
      type:   "face",
      subtype:"arctic",
      rarity: "common",
      image:  "face_lynxfluff.png"
    },
    {
      name:   "Neck Fluff",
      type:   "face",
      subtype:"arctic",
      rarity: "common",
      image:  "face_neckfluff2.png"
    },
    {
      name:   "Longer Neck Fluff",
      type:   "face",
      subtype:"arctic",
      rarity: "common",
      image:  "face_neckfluff.png"
    },
    // Ears
    {
      name:   "Long Perk",
      type:   "ear",
      subtype:"standard",
      rarity: "common",
      image:  "ears_longperk.png"
    },
    {
      name:   "Long Lop",
      type:   "ear",
      subtype:"standard",
      rarity: "common",
      image:  "ears_longlop.png"
    },
    {
      name:   "Short Perk",
      type:   "ear",
      subtype:"standard",
      rarity: "common",
      image:  "ears_shortperk.png"
    },
    {
      name:   "Extra Long Lop Tuft",
      type:   "ear",
      subtype:"arctic",
      rarity: "common",
      image:  "ears_exlongloptuft.png"
    },
    {
      name:   "Long Tuft",
      type:   "ear",
      subtype:"arctic",
      rarity: "common",
      image:  "ears_longperktuft.png"
    },
    {
      name:   "Short Tuft",
      type:   "ear",
      subtype:"arctic",
      rarity: "common",
      image:  "ears_shortperktuft.png"
    },
    {
      name:   "Folded Tuft",
      type:   "ear",
      subtype:"arctic",
      rarity: "common",
      image:  "ears_foldedtuft.png"
    },
    {
      name:   "Multigem",
      type:   "ear",
      subtype:"standard",
      rarity: "uncommon",
      image:  "ears_multigem.png"
    },
    {
      name:   "Long Perk Flared",
      type:   "ear",
      subtype:"standard",
      rarity: "uncommon",
      image:  "ears_longperkflared.png"
    },
    {
      name:   "Long Lop Flared",
      type:   "ear",
      subtype:"standard",
      rarity: "uncommon",
      image:  "ears_longlopflared.png"
    },
    // Arms
    {
      name:   "Female Arms",
      type:   "arm",
      subtype:"standard",
      rarity: "common",
      image:  "arms_female.png"
    },
    {
      name:   "Male Arms",
      type:   "arm",
      subtype:"standard",
      rarity: "common",
      image:  "arms_male.png"
    },
    {
      name:   "Crystal Claws",
      type:   "arm",
      subtype:"standard",
      rarity: "common",
      image:  "arms_malecrystalclaws.png"
    },
    {
      name:   "Fire Elemental",
      type:   "arm",
      subtype:"standard",
      rarity: "rare",
      image:  "arms_fireelemental.png"
    },
    {
      name:   "Electricity Elemental",
      type:   "arm",
      subtype:"standard",
      rarity: "rare",
      image:  "arms_electricityelemental.png"
    },
    {
      name:   "Shadow Elemental",
      type:   "arm",
      subtype:"standard",
      rarity: "rare",
      image:  "arms_shadowelemental.png"
    },
    // Feet
    {
      name:   "Standard Feet",
      type:   "foot",
      subtype:"standard",
      rarity: "common",
      image:  "feet_standard.png"
    },
    {
      name:   "Dew Claw",
      type:   "foot",
      subtype:"standard",
      rarity: "common",
      image:  "feet_dewclaw.png"
    },
    // Tails
    {
      name:   "Standard",
      type:   "tail",
      subtype:"standard",
      rarity: "common",
      image:  "tail_standard.png"
    },
    {
      name:   "Thinner",
      type:   "tail",
      subtype:"desert",
      rarity: "common",
      image:  "tail_thindesert.png"
    },
    {
      name:   "Fluffy",
      type:   "tail",
      subtype:"arctic",
      rarity: "common",
      image:  "tail_fluff.png"
    },
    {
      name:   "Super Fluffy",
      type:   "tail",
      subtype:"standard",
      rarity: "common",
      image:  "tail_superfluff.png"
    },
    // Tail Plates
    {
      name:   "Rounded",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_rounded.png"
    },
    {
      name:   "Rounded Hole",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_roundedhole.png"
    },
    {
      name:   "Floppy",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_floppy.png"
    },
    {
      name:   "Cutlass",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_cutlass.png"
    },
    {
      name:   "Cutlass Dip",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_cutlassdip.png"
    },
    {
      name:   "Short Cutlass",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_shortcutlass.png"
    },
    {
      name:   "Dip",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_dip.png"
    },
    {
      name:   "Fineart",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_fineart.png"
    },
    {
      name:   "Frilled",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_frilled.png"
    },
    {
      name:   "Notched",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_notched.png"
    },
    {
      name:   "Pronged",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_pronged.png"
    },
    {
      name:   "Pronged Flat",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_prongedflat.png"
    },
    {
      name:   "Pronged Heart",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_prongedheart.png"
    },
    {
      name:   "Shattered",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_shattered.png"
    },
    {
      name:   "Diamond",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "common",
      image:  "tailplate_diamond.png"
    },
    {
      name:   "Rounded Cut",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_roundedcut.png"
    },
    {
      name:   "Floppy 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_floppy2nd.png"
    },
    {
      name:   "Cutlass 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_cutlass2nd.png"
    },
    {
      name:   "Dip 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_dip2nd.png"
    },
    {
      name:   "Frilled 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_frilled2nd.png"
    },
    {
      name:   "Frilled 2nd Small",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_frilled2ndsmall.png"
    },
    {
      name:   "Notched 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_notched2nd.png"
    },
    {
      name:   "Pronged 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_pronged2nd.png"
    },
    {
      name:   "Pronged Flat 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_prongedflat2nd.png"
    },
    {
      name:   "Pronged Heart 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_prongedheart2nd.png"
    },
    {
      name:   "Diamond 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_diamond2nd.png"
    },
    {
      name:   "Engraved Rosebud",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_engravedrosebud.png"
    },
    {
      name:   "Engraved Swirls",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_engraved.png"
    },
    {
      name:   "Joined Plate Fin",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_joinedplate_fin.png"
    },
    {
      name:   "Joined Saw 2nd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_joinedplate_saw.png"
    },
    {
      name:   "Joined Short Smooth",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_joinedplate_short.png"
    },
    {
      name:   "Joined Short Saw",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailplate_joinedplate_shortsaw.png"
    },
    {
      name:   "Floppy 3rd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "rare",
      image:  "tailplate_floppy3rd.png"
    },
    {
      name:   "Notched 3rd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "rare",
      image:  "tailplate_notched3rd.png"
    },
    {
      name:   "Pronged 3rd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "rare",
      image:  "tailplate_pronged3rd.png"
    },
    {
      name:   "Shattered Multi",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "rare",
      image:  "tailplate_shatteredmulti.png"
    },
    {
      name:   "Diamond 3rd",
      type:   "tail_plate",
      subtype:"standard",
      rarity: "rare",
      image:  "tailplate_diamond3rd.png"
    },
    // Tail Shards
    {
      name:   "Standard",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_standard.png"
    },
    {
      name:   "Pointed Shards",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_pointedshards.png"
    },
    {
      name:   "Rounded",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_rounded.png"
    },
    {
      name:   "Sundial",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_sundial.png"
    },
    {
      name:   "5 Geometric",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_5geometric.png"
    },
    {
      name:   "Pillar",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_pillar.png"
    },
    {
      name:   "Stars",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_stars.png"
    },
    {
      name:   "Inline",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_inline.png"
    },
    {
      name:   "Wide Fluff",
      type:   "tail_shard",
      subtype:"arctic",
      rarity: "common",
      image:  "tailshards_fluffstandard.png"
    },
    {
      name:   "Hearts",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "common",
      image:  "tailshards_hearts.png"
    },
    {
      name:   "Joined Star",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailshards_joinedstar.png"
    },
    {
      name:   "Joined Starburst",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailshards_joinedstarburst.png"
    },
    {
      name:   "Joined Square",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailshards_joinedsquare.png"
    },
    {
      name:   "Joined Diamond",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailshards_joineddiamond.png"
    },
    {
      name:   "Joined Circle",
      type:   "tail_shard",
      subtype:"standard",
      rarity: "uncommon",
      image:  "tailshards_joinedcircle.png"
    },
    // Legendaries
    {
      name:   "Horns",
      type:   "legendary",
      subtype:"standard",
      rarity: "legendary",
      image:  "legendary_horns.png"
    },
    {
      name:   "Wings",
      type:   "legendary",
      subtype:"standard",
      rarity: "legendary",
      image:  "legendary_wings.png"
    },
    {
      name:   "Scorned Gem",
      type:   "legendary",
      subtype:"standard",
      rarity: "legendary",
      image:  "legendary_gem.png"
    },
    {
      name:   "Scorned Neck Gems",
      type:   "legendary",
      subtype:"standard",
      rarity: "legendary",
      image:  "legendary_necklace.png"
    },
    {
      name:   "Scorned Tailplates",
      type:   "legendary",
      subtype:"standard",
      rarity: "legendary",
      image:  "legendary_tailplates.png"
    },
    {
      name:   "Scorned Hip Fringe",
      type:   "legendary",
      subtype:"standard",
      rarity: "legendary",
      image:  "legendary_hipfind.png"
    },
    {
      name:   "Scorned Tail Shards",
      type:   "legendary",
      subtype:"standard",
      rarity: "legendary",
      image:  "legendary_scornedtailplate.png"
    },
    // Clothes & Non-traits
    {
      name:   "Military Spurs",
      type:   "non_traits_and_clothing",
      subtype:"standard",
      rarity: "none",
      image:  "enhancementspurs.png"
    },
    {
      name:   "Encancement Bracelets",
      type:   "non_traits_and_clothing",
      subtype:"standard",
      rarity: "none",
      image:  "enhancementringsbraceletes.png"
    },
    {
      name:   "Enhancement Tail Ring",
      type:   "non_traits_and_clothing",
      subtype:"standard",
      rarity: "none",
      image:  "enhancementringstail.png"
    },
  ]

  public trait_descriptions = [
    {
      "title":"Face",
      "type":"face",
      "description":"Starshooters with multiple eyes typically lack any discernible iris or pupils, though they can see just fine. Arctic Shooters can grow fluff around their necks and jawlines.",
    },
    {
      "title":"Ears",
      "type":"ear",
      "description":"They use these to hear stuff. Starshooters have rounded gems located at the base of their ears. They don't disrupt or make hearing difficult. These gems can be cut, following the same universal gem cutting rarities (Common: simple shapes, smooth or faceted. Uncommon: encraved and multigem. Rare: Complex cuts, cuts that don't resemble one simple, unified shape.). Arctic Shooters tend to grow tufts on the very ends of their ears, some even folding naturally to protect their gems. Flared ears are uncommonly seen, as they are reminiscent of the Starshooters more 'primitive' Stardragon kin. The flares are divots in the skin itself, not to be confused with fluff or fur.",
    },
    {
      "title":"Arms",
      "type":"arm",
      "description":"Females have fairly delicate and humanoid arms and hands with five slender fingers, while males have stockier arms with four large, claw-like fingers and an accompanying spike protruding from each elbow. It is very rare to find a Starshooter gifted with elemental magicks. These Shooters can control and manipulate their elements, and often weaponize them for personal gain. These Stardragons emanate great power visibly from their forearms.",
    },
    {
      "title":"Feet",
      "type":"foot",
      "description":"Both genders have long cat-like paws, complete with lil toebeans. Some shooters have a dew claw, others do not.",
    },
    {
      "title":"Tails",
      "type":"tail",
      "description":"Tails usually do not vary too far outside of the types below, either in length or thickness. Arctic dwelling Shooters may grow extraordinarily fluffy furry tails. These Shooters will have wider rings of tail shards to accommodate for the thicker fur, and usually have shorter tail plates.",
    },
    {
      "title":"Tail Plates",
      "type":"tail_plate",
      "description":"Starshooters have semi flexible 'plates' lining their tails. Acting similarly to a rubbery plastic, they are surprisingly soft and flexible, but will become fragile or brittle when engraved. Therefore engraved tailplates are an UNCOMMON trait. Joined plates are plates that grow as one solid connected plate rather than the common four plate arrangement. Uncommon secondary plates float close to the tailplates and generally compliment the shape. It is rare to find Shooters with a tertiary floating plate, or really any number over 2.",
    },
    {
      "title":"Tail Shards",
      "type":"tail_shard",
      "description":"Starshooters have a ring of floating gem shards around the tips of their tails. The most common arrangements are 5-6 large shards with an equal number of complimenting small shards. Most Shooter's shards grow in rough cut teardrop gem shapes, but variations and cosmetically shaped shards are not unheard of. Uncommon shards are made up of a continuous joined shape, usually in a thin pipe or ring with accompanying floating shards. Shooters with these rings are born with the shape, it cannot be fabricated cosmetically.",
    },
    {
      "title":"Legendaries",
      "type":"legendary",
      "description":"Some Shooters believe those who are born with these mutations are cursed to look like their more primitive selves. However, the younger generation may believe this to be a blessing given to them by Basut himself.",
    },
    {
      "title":"Non Traits and Clothing",
      "type":"non_traits_and_clothing",
      "description":"Enhancement rings are hand crafted to aid in strength and magic channeling. They are usually worn around the wrists, or around the tail to reduce drag from weight. Ankle spurs allow the user to hover or levitate, they are usually military issued.",
    },
  ];

  constructor(private gem: GemExchangeAPI){}

  ngOnInit(){}

  getTraits(type, rarity, subtype){
    let traits = this.getTraitsByTypeAndRarity(type, rarity);
    return traits.filter(function(trait, index, self){
      if(subtype == 'all'){
        return true;
      }
      return trait.subtype == subtype;
    });
  }

  getTraitTypes(){
    let types = this.traits.map(a => a.type);
    let unique_types = types.filter(function(elem, index, self) {return index == self.indexOf(elem)});
    unique_types.push('all');
    return unique_types;
  }

  getTraitsByType(type){
    return this.traits.filter(function(trait, index, self){
      return trait.type == type;
    });
  }

  getTraitsByTypeAndRarity(type, rarity){
    let traits_by_type = this.getTraitsByType(type);
    if(this.rarity_filter == 'all'){
      return traits_by_type;
    }
    else{
      return traits_by_type.filter(function(trait, index, self){
        return trait.rarity == rarity;
      })
    }
  }

  getTraitDescription(type){
    let desc_obj = this.trait_descriptions.find(function(trait, index, self){
      return trait.type == type;
    });
    if(desc_obj){
      return desc_obj.description;
    }
    else{
      return "";
    }
  }
}
