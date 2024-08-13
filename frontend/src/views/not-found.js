import React from 'react';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

export default NotFound;




const natureSubCategories = [
  'Atmosphere',
  'Forest',
  'Ocean',
  'Rain',
  'Rainforest',
  'River',
  'Thunder'
];
const categories = ['Nature Sounds', 'Urban Sounds', 'Pink Noise', 'White Noise'];

const soundSamples = [
  {
    category: 'Nature Sounds',
    subCategories: natureSubCategories,
    sounds: [
      { subCategory: 'Atmosphere', title: 'Bushland Atmosphere', description: 'Bushland Atmosphere', file: '/sounds/ambient soundscape/nature sounds/atmosphere/Bushland Atmosphere.wav', duration: '30:00' },
      { subCategory: 'Atmosphere', title: 'Mountain Atmosphere', description: 'Mountain Atmosphere', file: '/sounds/ambient soundscape/nature sounds/atmosphere/Mountain Atmosphere.wav', duration: '45:00' },
      { subCategory: 'Atmosphere', title: 'Wetland Atmosphere', description: 'Wetland Atmosphere', file: '/sounds/ambient soundscape/nature sounds/atmosphere/Wetland Atmosphere.wav', duration: '60:00' },
      { subCategory: 'Atmosphere', title: 'Woodland Atmosphere', description: 'Woodland Atmosphere', file: '/sounds/ambient soundscape/nature sounds/atmosphere/Woodland Atmosphere.wav', duration: '60:00' },
      { subCategory: 'Forest', title: 'Dawn Chorus', description: 'Dawn chorus of rainforest birds', file: '/sounds/ambient soundscape/nature sounds/forest/Dawn chorus of rainforest birds.wav', duration: '30:00' },
      { subCategory: 'Forest', title: 'Rustling Leaves', description: 'Rustling leaves in dry vegetation', file: '/sounds/ambient soundscape/nature sounds/forest/Rustling in dry vegetation.wav', duration: '45:00' },
      { subCategory: 'Forest', title: 'Bird Australian Cassowary', description: 'Bird Australian Cassowary', file: '/sounds/ambient soundscape/nature sounds/forest/bird Australian Cassowary .wav', duration: '60:00' },
      { subCategory: 'Forest', title: 'Bird Brown Headed Cowbird', description: 'Bird Brown Headed Cowbird', file: '/sounds/ambient soundscape/nature sounds/forest/bird Brown Headed Cowbird.wav', duration: '30:00' },
      { subCategory: 'Forest', title: 'Bird Brown Sickle Bill', description: 'Bird Brown Sickle Bill', file: '/sounds/ambient soundscape/nature sounds/forest/bird Brown Sickle bill.wav', duration: '45:00' },
      { subCategory: 'Forest', title: 'Bird Cactus Finch', description: 'Bird Cactus Finch', file: '/sounds/ambient soundscape/nature sounds/forest/bird Cactus Finch.wav', duration: '60:00' },
      { subCategory: 'Forest', title: 'Bird Chaffinch', description: 'Bird Chaffinch', file: '/sounds/ambient soundscape/nature sounds/forest/bird Chaffinch.wav', duration: '30:00' },
      { subCategory: 'Forest', title: 'Bird Coal Tit', description: 'Bird Coal Tit', file: '/sounds/ambient soundscape/nature sounds/forest/Bird Coal Tit.wav', duration: '45:00' },
      { subCategory: 'Forest', title: 'Bird Great Tit', description: 'Bird Great Tit', file: '/sounds/ambient soundscape/nature sounds/forest/Bird Great Tit.wav', duration: '60:00' },
      { subCategory: 'Forest', title: 'Bird Madagascar Swamp Warbler', description: 'Bird Madagascar Swamp Warbler', file: '/sounds/ambient soundscape/nature sounds/forest/bird Madagascar Swamp Warbler.wav', duration: '30:00' },
      { subCategory: 'Forest', title: 'Bird Unidentified Bird - Trill', description: 'Bird Unidentified Bird - Trill', file: '/sounds/ambient soundscape/nature sounds/forest/bird Unidentified Bird - Trill..wav', duration: '45:00' },
      { subCategory: 'Forest', title: 'Bird Willow Warbler', description: 'Bird Willow Warbler', file: '/sounds/ambient soundscape/nature sounds/forest/Bird Willow Warbler.wav', duration: '60:00' },
      { subCategory: 'Forest', title: 'Bird Yellow-headed Blackbird', description: 'Bird Yellow-headed Blackbird', file: '/sounds/ambient soundscape/nature sounds/forest/bird Yellow-headed Blackbird.wav', duration: '30:00' },
      { subCategory: 'Forest', title: 'Bird Collared Dove', description: 'Bird Collared Dove', file: '/sounds/ambient soundscape/nature sounds/forest/Bird Collared Dove.wav', duration: '45:00' },
      { subCategory: 'Forest', title: 'Forest Atmosphere', description: 'Forest Atmosphere', file: '/sounds/ambient soundscape/nature sounds/forest/forest atmosphere.wav', duration: '60:00' },
      { subCategory: 'Forest', title: 'Medium Distance Calls', description: 'Medium distance calls from crow in rainforest atmosphere', file: '/sounds/ambient soundscape/nature sounds/forest/medium distance calls from crow in rainforest atmosphere.wav', duration: '30:00' },
      { subCategory: 'Forest', title: 'Occasional Passing Insect', description: 'Occasional passing insect and rustling leaves', file: '/sounds/ambient soundscape/nature sounds/forest/occasional passing insect and rustling leaves..wav', duration: '45:00' },
      { subCategory: 'Forest', title: 'Rustling Sounds', description: 'Rustling sounds of elephant walking though dry vegetation', file: '/sounds/ambient soundscape/nature sounds/forest/Rustling sounds of elephant walking though dry vegetation.wav', duration: '60:00' },
      { subCategory: 'Forest', title: 'Two Axes Striking', description: 'Two axes striking one trunk within rainforest', file: '/sounds/ambient soundscape/nature sounds/forest/Two axes striking one trunk within rainforest.wav', duration: '30:00' },
      // Add more sounds for Nature Sounds
    ]
  },
  {
    category: 'Urban Sounds',
    sounds: [
      { title: 'BT Local Line Noise', description: 'BT local line noise', file: '/sounds/ambient soundscape/urban sounds/ BT local line noise.wav', duration: '30:00' },
      { title: 'Punch Card Reader Printer', description: 'Punch card reader printer', file: '/sounds/ambient soundscape/urban sounds/(Punch card reader_printer.).wav', duration: '30:00' },
      { title: 'Amstrad Dot-Matrix Printer', description: 'Amstrad Dot-Matrix Printer printing', file: '/sounds/ambient soundscape/urban sounds/Amstrad Dot-Matrix Printer printing.wav', duration: '30:00' },
      { title: 'Arabic Crowds', description: 'Arabic crowds', file: '/sounds/ambient soundscape/urban sounds/Arabic Crowds.wav', duration: '30:00' },
      { title: 'Café Ammassalik', description: 'Café Ammassalik', file: '/sounds/ambient soundscape/urban sounds/Cafe - Ammassalik.wav', duration: '30:00' },
      { title: 'Café Atmosphere', description: 'Cafe atmosphere, men chatter quite animatedly', file: '/sounds/ambient soundscape/urban sounds/Cafe atmosphere, men chatter quite aminatedly.wav', duration: '30:00' },
      { title: 'Café in Hospital Foyer', description: 'Cafe in hospital foyer', file: '/sounds/ambient soundscape/urban sounds/Cafe in hospital foyer..wav', duration: '30:00' },
      { title: 'Café Copenhagen', description: 'Cafe, Copenhagen', file: '/sounds/ambient soundscape/urban sounds/Cafe, Copenhagen.wav', duration: '30:00' },
      { title: 'Car Park Atmosphere', description: 'Car park atmosphere with close and distant traffic', file: '/sounds/ambient soundscape/urban sounds/Car park atmosphere with close and distant traffic .wav', duration: '30:00' },
      { title: 'Carrier Leaves', description: 'Carrier leaves filled with empty milk bottles', file: '/sounds/ambient soundscape/urban sounds/Carrier leaves filled with empty milk bottles..wav', duration: '30:00' },
      { title: 'Cash Registers', description: 'Cash registers', file: '/sounds/ambient soundscape/urban sounds/Cash Registers.wav', duration: '30:00' },
      { title: 'Chatter and Clatter of Plates', description: 'Chatter and clatter of plates', file: '/sounds/ambient soundscape/urban sounds/chatter and clatter of plates.wav', duration: '30:00' },
      { title: 'Chatter', description: 'Chatter', file: '/sounds/ambient soundscape/urban sounds/chatter.wav', duration: '30:00' },
      { title: 'Church Bells', description: 'Church bells with some distant traffic', file: '/sounds/ambient soundscape/urban sounds/Church Bells with some distant traffic.wav', duration: '30:00' },
      { title: 'Computer Typing', description: 'Computer, typing text', file: '/sounds/ambient soundscape/urban sounds/Computer, typing text.wav', duration: '30:00' },
      { title: 'Creed Keyboard Perforator', description: 'Creed keyboard perforator, 1925', file: '/sounds/ambient soundscape/urban sounds/Creed keyboard perforator, 1925..wav', duration: '30:00' },
      { title: 'Creed Morse Printer', description: 'Creed morse printer', file: '/sounds/ambient soundscape/urban sounds/Creed morse printer,.wav', duration: '30:00' },
      { title: 'Electric Typewriter', description: 'Electric typewriter fast typing', file: '/sounds/ambient soundscape/urban sounds/Electric Typewriter fast typing.wav', duration: '30:00' },
      { title: 'Epson Dot-Matrix Printer', description: 'Epson Dot-Matrix Printer', file: '/sounds/ambient soundscape/urban sounds/Epson Dot-Matrix Printer.wav', duration: '30:00' },
      { title: 'Extracting and Sorting Newspaper Cuttings', description: 'Extracting and sorting newspaper cuttings', file: '/sounds/ambient soundscape/urban sounds/extracting and sorting newspaper cuttings.wav', duration: '30:00' },
      { title: 'Football Crowd', description: 'Football crowd', file: '/sounds/ambient soundscape/urban sounds/Football crowd.wav', duration: '30:00' },
      { title: 'Galleried Reference Library', description: 'Galleried reference library, with footsteps and distant traffic', file: '/sounds/ambient soundscape/urban sounds/galleried reference library, with footsteps and distant traffic..wav', duration: '30:00' },
      { title: 'Juki Daisywheel Printer', description: 'Juki Daisywheel Printer switch on', file: '/sounds/ambient soundscape/urban sounds/Juki Daisywheel Printer switch on.wav', duration: '30:00' },
      { title: 'Manual Typewriter', description: 'Manual typewriter', file: '/sounds/ambient soundscape/urban sounds/Manual Typewriter.wav', duration: '30:00' },
      { title: 'Murmur of Distant Suburban Traffic', description: 'Murmur of distant suburban traffic', file: '/sounds/ambient soundscape/urban sounds/Murmur of distant suburban traffic..wav', duration: '30:00' },
      { title: 'Pool Game', description: 'Pool game', file: '/sounds/ambient soundscape/urban sounds/Pool Game.wav', duration: '30:00' },
      { title: 'Printer Operating', description: 'Printer operating (fast)', file: '/sounds/ambient soundscape/urban sounds/Printer operating (fast).wav', duration: '30:00' },
      { title: 'Pub Chatter 20-30 People', description: 'Pub chatter 20-30 people', file: '/sounds/ambient soundscape/urban sounds/pub chatter 20-30 people.wav', duration: '30:00' },
      { title: 'Pub Chatter 70 People', description: 'Pub chatter 70 people', file: '/sounds/ambient soundscape/urban sounds/pub chatter 70 people.wav', duration: '30:00' },
      { title: 'Public Library', description: 'Public Library with voices, footsteps, trolleys & a telephone', file: '/sounds/ambient soundscape/urban sounds/Public Library with voices, footsteps, trolleys & a telephone.wav', duration: '30:00' },
      { title: 'Pulse Monitor', description: 'Pulse monitor', file: '/sounds/ambient soundscape/urban sounds/pulse monitor.wav', duration: '30:00' },
      { title: 'Quiet Atmosphere in Galleried Reference Library', description: 'Quiet atmosphere in galleried reference library', file: '/sounds/ambient soundscape/urban sounds/quiet atmosphere in galleried reference library.wav', duration: '30:00' },
      { title: 'Quiet Transport Café', description: 'Quiet transport cafe with occasional speech and chatter', file: '/sounds/ambient soundscape/urban sounds/Quiet transport cafe with occasional speech and chatter.wav', duration: '30:00' },
      { title: 'Quiet with Some Paper Rustles', description: 'Quiet with some paper rustles, creaks of chairs, no speech', file: '/sounds/ambient soundscape/urban sounds/quiet with some paper rustles, creaks of chairs, no speech.wav', duration: '30:00' },
      { title: 'Room with Computer Disc Drives', description: 'Room with computer disc drives & heavy air conditioning, steady equipment sound & quiet intermittent beeps', file: '/sounds/ambient soundscape/urban sounds/Room with computer disc drives & heavy air conditioning, steady equipment sound & quiet intermittent beeps.wav', duration: '30:00' },
      { title: 'Rummaging in Full Skip', description: 'Rummaging in full skip with distant traffic', file: '/sounds/ambient soundscape/urban sounds/rummaging in full skip with distant traffic..wav', duration: '30:00' },
      { title: 'Saturday Night Atmosphere', description: 'Saturday night atmosphere', file: '/sounds/ambient soundscape/urban sounds/Saturday night atmosphere.wav', duration: '30:00' },
      { title: 'Small Café', description: 'Small Cafe', file: '/sounds/ambient soundscape/urban sounds/Small Cafe..wav', duration: '30:00' },
      { title: 'Small Town', description: 'Small town, children in playground', file: '/sounds/ambient soundscape/urban sounds/Small town, children in playground.wav', duration: '30:00' },
      { title: 'Tamanrasset', description: 'Tamanrasset, market atmosphere, with distant traffic', file: '/sounds/ambient soundscape/urban sounds/Tamanrasset, market atmosphere, with distant traffic..wav', duration: '30:00' },
      { title: 'Traffic at Night', description: 'Traffic at night', file: '/sounds/ambient soundscape/urban sounds/Traffic at night.wav', duration: '30:00' },
      { title: 'Traffic Atmosphere from Rooftop', description: 'Traffic atmosphere from roof top, with wind & birds', file: '/sounds/ambient soundscape/urban sounds/traffic atmosphere from roof top, with wind & birds.wav', duration: '30:00' },
      { title: 'Traffic Through Park', description: 'Traffic through park, Mountain', file: '/sounds/ambient soundscape/urban sounds/Traffic through park, Mountain.wav', duration: '30:00' },
      { title: 'Typing with Three Hands', description: 'Typing with three hands', file: '/sounds/ambient soundscape/urban sounds/Typing with three hands.wav', duration: '30:00' },
      { title: 'Village and Playground Atmospheres', description: 'Village and Playground Atmospheres', file: '/sounds/ambient soundscape/urban sounds/Village And Playground Atmospheres.wav', duration: '30:00' },
    ]
  },
  {
    category: 'Pink Noise',
    sounds: [
      { title: 'Pink Noise', description: 'Pure pink noise', file: '/sounds/ambient soundscape/pink-noise.mp3', duration: '60:00' },
    ],
  },
  {
    category: 'White Noise',
    sounds: [
      { title: 'White Noise', description: 'Pure white noise', file: '/sounds/ambient soundscape/white-noise.mp3', duration: '60:00' },
    ],
  },
];