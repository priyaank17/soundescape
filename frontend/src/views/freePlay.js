import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaTrashAlt, FaPlus, FaMinus, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Howl } from 'howler';
import { Link} from 'react-router-dom';
import './freePlay.css';





const soundscapes = [
  { title: 'Calm Drone', description: 'Calm drone sound', file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/drones/calm-drone.mp3'},
  { title: 'Dark Pad 1 Drone', description: 'Dark pad drone sound', file: '/sounds/drones/dark pad 1 drone.wav' },
  { title: 'Dark Pad 2 Drone', description: 'Dark pad drone sound', file: '/sounds/drones/dark pad 2 drone.wav'},
  { title: 'Deep Drone', description: 'Deep drone sound', file: '/sounds/drones/deep drone.wav'},
  { title: 'Pad 2 Drone', description: 'Pad drone sound', file: '/sounds/drones/pad 2drone.wav'},
  { title: 'Pad Drone', description: 'Pad drone sound', file: '/sounds/drones/pad drone.wav'},
  { title: 'Sine Drone', description: 'Sine drone sound', file: '/sounds/drones/sine drone.wav'},
  { title: 'Sine Pad Drone', description: 'Sine pad drone sound', file: '/sounds/drones/sine pad drone.wav'},
  { title: 'Slow Pad Drone', description: 'Slow pad drone sound', file: '/sounds/drones/slow pad drone.wav'},
  { title: 'Space Drone', description: 'Space drone sound', file: '/sounds/drones/space drone.wav'},
  { title: 'Synth Drone', description: 'Synth drone sound', file: '/sounds/drones/synth drone.wav'},
  { title: 'Tri Sine Drone', description: 'Tri sine drone sound', file: '/sounds/drones/tri sine drone.wav'},
  { title: 'Calm Pad', description: 'Calm pad drone sound', file: '/sounds/DRONE PADS/CALM PAD.wav'},
  { title: 'Dark Pad 1', description: 'Dark pad 1 drone sound', file: '/sounds/DRONE PADS/DARK PAD 1.wav'},
  { title: 'Dark Pad 2', description: 'Dark pad 2 drone sound', file: '/sounds/DRONE PADS/DARK PAD 2.wav'},
  { title: 'Deep Pad', description: 'Deep pad drone sound', file: '/sounds/DRONE PADS/DEEP PAD.wav'},
  { title: 'Glass Pad', description: 'Glass pad drone sound', file: '/sounds/DRONE PADS/GLASS PAD.wav'},
  { title: 'Puresine Pad', description: 'Puresine pad drone sound', file: '/sounds/DRONE PADS/PURESINE PAD.wav'},
  { title: 'Space Pad', description: 'Space pad drone sound', file: '/sounds/DRONE PADS/SPACE PAD.wav'},
  { title: 'Stars Pad', description: 'Stars pad drone sound', file: '/sounds/DRONE PADS/STARS PAD.wav'},
  { title: 'Table Pad', description: 'Table pad drone sound', file: '/sounds/DRONE PADS/TABLE PAD.wav'},
  { title: 'Zen Space Pad', description: 'Zen space pad drone sound', file: '/sounds/DRONE PADS/ZEN SPACE PAD.wav'},
];

const soundSamples = [
  {
    category: 'Nature Sounds',
    subCategories: [
      {
        subCategory: 'Atmosphere',
        sounds: [
          { title: 'Bushland Atmosphere', description: 'Bushland Atmosphere', file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/ambient+soundscape/nature+sounds/atmosphere/Bushland-Atmosphere.mp3'},
          { title: 'Mountain Atmosphere', description: 'Mountain Atmosphere', file: '/sounds/ambient soundscape/nature sounds/atmosphere/Mountain Atmosphere.wav'},
          { title: 'Wetland Atmosphere', description: 'Wetland Atmosphere', file: '/sounds/ambient soundscape/nature sounds/atmosphere/Wetland Atmosphere.wav' },
          { title: 'Woodland Atmosphere', description: 'Woodland Atmosphere', file: '/sounds/ambient soundscape/nature sounds/atmosphere/Woodland Atmosphere.wav'},
        ]
      },
      {
        subCategory: 'Forest',
        sounds: [
          { title: 'Dawn Chorus', description: 'Dawn chorus of rainforest birds', file: '/sounds/ambient soundscape/nature sounds/forest/ Dawn chorus of rainforest birds.wav'},
          { title: 'Rustling Leaves', description: 'Rustling leaves in dry vegetation', file: '/sounds/ambient soundscape/nature sounds/forest/ Rustling in dry vegetation..wav'},
          { title: 'Bird Australian Cassowary', description: 'Bird Australian Cassowary', file: '/sounds/ambient soundscape/nature sounds/forest/bird Australian Cassowary .wav'},
          { title: 'Bird Brown Headed Cowbird', description: 'Bird Brown Headed Cowbird', file: '/sounds/ambient soundscape/nature sounds/forest/bird Brown Headed Cowbird.wav'},
          { title: 'Bird Brown Sickle Bill', description: 'Bird Brown Sickle Bill', file: '/sounds/ambient soundscape/nature sounds/forest/bird Brown Sicklebill.wav'},
          { title: 'Bird Cactus Finch', description: 'Bird Cactus Finch', file: '/sounds/ambient soundscape/nature sounds/forest/bird Cactus Finch.wav'},
          { title: 'Bird Chaffinch', description: 'Bird Chaffinch', file: '/sounds/ambient soundscape/nature sounds/forest/bird Chaffinch.wav'},
          { title: 'Bird Coal Tit', description: 'Bird Coal Tit', file: '/sounds/ambient soundscape/nature sounds/forest/Bird Coal Tit.wav'},
          { title: 'Bird Great Tit', description: 'Bird Great Tit', file: '/sounds/ambient soundscape/nature sounds/forest/Bird Great Tit.wav'},
          { title: 'Bird Madagascar Swamp Warbler', description: 'Bird Madagascar Swamp Warbler', file: '/sounds/ambient soundscape/nature sounds/forest/bird Madagascar Swamp Warbler.wav'},
          { title: 'Bird Unidentified Bird - Trill', description: 'Bird Unidentified Bird - Trill', file: '/sounds/ambient soundscape/nature sounds/forest/bird Unidentified Bird - Trill..wav'},
          { title: 'Bird Willow Warbler', description: 'Bird Willow Warbler', file: '/sounds/ambient soundscape/nature sounds/forest/Bird Willow Warbler.wav'},
          { title: 'Bird Yellow-headed Blackbird', description: 'Bird Yellow-headed Blackbird', file: '/sounds/ambient soundscape/nature sounds/forest/bird Yellow-headed Blackbird.wav'},
          { title: 'Bird Collared Dove', description: 'Bird Collared Dove', file: '/sounds/ambient soundscape/nature sounds/forest/BirdCollared Dove.wav'},
          { title: 'Forest Atmosphere', description: 'Forest Atmosphere', file: '/sounds/ambient soundscape/nature sounds/forest/forest atmosphere.wav'},
          { title: 'Medium Distance Calls', description: 'Medium distance calls from crow in rainforest atmosphere', file: '/sounds/ambient soundscape/nature sounds/forest/medium distance calls from crow in rainforest atmosphere.wav'},
          { title: 'Occasional Passing Insect', description: 'Occasional passing insect and rustling leaves', file: '/sounds/ambient soundscape/nature sounds/forest/occasional passing insect and rustling leaves..wav'},
          { title: 'Rustling Sounds', description: 'Rustling sounds of elephant walking though dry vegetation', file: '/sounds/ambient soundscape/nature sounds/forest/Rustling sounds of elephant walking though dry vegetation.wav'},
          { title: 'Two Axes Striking', description: 'Two axes striking one trunk within rainforest', file: '/sounds/ambient soundscape/nature sounds/forest/Two axes striking one trunk within rainforest.wav'},

    ]
  },
  {
    subCategory: 'Ocean',
    sounds: [
      { title: 'Waves lapping on beach at high tide', description: 'Waves lapping on beach at high tide', file: '/sounds/ambient soundscape/nature sounds/ocean/ Waves lapping on beach at high tide..wav', duration: '5:00' },
      { title: 'Beach Atmosphere', description: 'Medium distance sound of breaking waves', file: '/sounds/ambient soundscape/nature sounds/ocean/Beach Atmosphere - medium distance sound of breaking waves.wav', duration: '4:30' },
      { title: 'Quiet seawash', description: 'Gentle close perspective waves on shingle', file: '/sounds/ambient soundscape/nature sounds/ocean/Quiet seawash, gentle close perspective waves on shingle.wav', duration: '6:00' },
      { title: 'Sandy Beach Atmosphere', description: 'Sandy Beach Atmosphere', file: '/sounds/ambient soundscape/nature sounds/ocean/Sandy Beach Atmosphere.wav', duration: '7:00' },
      { title: 'Sea Wash Rough', description: 'Sea wash rough', file: '/sounds/ambient soundscape/nature sounds/ocean/sea wash rough.wav', duration: '5:45' },
      { title: 'Seaside - Sea Wash Calm', description: 'Seaside - Sea wash calm', file: '/sounds/ambient soundscape/nature sounds/ocean/seaside - sea wash calm.wav', duration: '6:30' },
      { title: 'Shingle Beach - Waves', description: 'Shingle Beach - Waves', file: '/sounds/ambient soundscape/nature sounds/ocean/Shingle Beach - Waves.wav', duration: '7:30' },
      { title: 'Stream - Gentle Flow with Bubbling', description: 'Stream - Gentle flow with bubbling', file: '/sounds/ambient soundscape/nature sounds/ocean/Stream - Gentle flow with bubbling.wav', duration: '8:00' },
      { title: 'Stream - Gentle Stream', description: 'Gentle stream sound', file: '/sounds/ambient soundscape/nature sounds/ocean/stream - gentle stream.wav', duration: '5:15' },
    ]
  },
  {
    subCategory: 'Rain',
    sounds: [
      { title: 'Driving Rain on Window', description: 'Interior acoustic sound of driving rain on window', file: '/sounds/ambient soundscape/nature sounds/RAIN/Driving rain on window. (Interior acoustic.).wav', duration: '6:00' },
      { title: 'Heavy Rain - On Turf and Trees', description: 'Heavy rain on turf and trees', file: '/sounds/ambient soundscape/nature sounds/RAIN/Heavy Rain - Heavy rain, on turf and trees..wav', duration: '5:30' },
      { title: 'Heavy Rain - Heavy Rain', description: 'Heavy rain sound', file: '/sounds/ambient soundscape/nature sounds/RAIN/Heavy Rain - Heavy rain..wav', duration: '7:00' },
      { title: 'Heavy Rain on Car Roof', description: 'Interior acoustic sound of heavy rain on car roof', file: '/sounds/ambient soundscape/nature sounds/RAIN/Heavy rain on car roof. (Interior acoustic.).wav', duration: '5:45' },
      { title: 'Heavy Rain with Puddles', description: 'Heavy rain with water dripping into puddles on ground', file: '/sounds/ambient soundscape/nature sounds/RAIN/Heavy rain with water dripping into puddles on ground.wav', duration: '6:15' },
      { title: 'Rain - Heavy Rain in Rainforest', description: 'Distant thunder in heavy rainforest rain', file: '/sounds/ambient soundscape/nature sounds/RAIN/Rain - Heavy rain in rainforest. Distant thunder..wav', duration: '6:00' },
      { title: 'Rain on Iron Shed Roof', description: 'Rain on corrugated iron shed roof', file: '/sounds/ambient soundscape/nature sounds/RAIN/Rain on corrugated iron shed roof..wav', duration: '5:30' },
      { title: 'Rain on Tent', description: 'Interior acoustic sound of rain on tent', file: '/sounds/ambient soundscape/nature sounds/RAIN/Rain on tent. (Interior acoustic.).wav', duration: '6:00' },
      { title: 'Soft Rain', description: 'Soft rain sound', file: '/sounds/ambient soundscape/nature sounds/RAIN/SOFT RAIN.wav', duration: '4:45' },
      { title: 'Rain Falling on Foliage', description: 'Rain falling and dripping onto large leaves', file: '/sounds/ambient soundscape/nature sounds/RAIN/rain falling and dripping onto large leaves. Occasional bird song in background..wav', duration: '6:30' },
    ]
  },
  {
    subCategory: 'Rainforest',
    sounds: [
      { title: 'Highland Rainforest at Night', description: 'Highland rainforest at night', file: '/sounds/ambient soundscape/nature sounds/RAIN/rainforest/Highland rainforest at night.wav', duration: '7:00' },
      { title: 'Rainforest Atmosphere - Birds and Light Rain (Copy)', description: 'Atmosphere with birds and light rain', file: '/sounds/ambient soundscape/nature sounds/RAIN/rainforest/Rainforest Atmosphere - atmosphere with birds and light rain copy.wav', duration: '6:30' },
      { title: 'Rainforest Atmosphere - Birds and Light Rain', description: 'Atmosphere with birds and light rain', file: '/sounds/ambient soundscape/nature sounds/RAIN/rainforest/Rainforest Atmosphere - atmosphere with birds and light rain.wav', duration: '6:45' },
      { title: 'Rainforest Atmosphere - Gentle Stream in Background', description: 'Neutral atmosphere with gentle stream in the background', file: '/sounds/ambient soundscape/nature sounds/RAIN/rainforest/Rainforest Atmosphere - neutral, with gentle stream in background.wav', duration: '7:30' },
      { title: 'Rainforest', description: 'Rainforest soundscape', file: '/sounds/ambient soundscape/nature sounds/RAIN/rainforest/Rainforest.wav', duration: '8:00' },
    ]
  },
  {
    subCategory: 'River',
    sounds: [
      { title: 'Brook Flowing', description: 'Brook flowing', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/ Brook flowing.wav', duration: '5:30' },
      { title: 'Gentle Stream Flowing', description: 'Gentle stream flowing', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/ gentle stream flowing.wav', duration: '4:45' },
      { title: 'Babbling Brook in Forest', description: 'Babbling brook in forest', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/babbling brook in forest.wav', duration: '5:00' },
      { title: 'Close-Up Water Flowing', description: 'Close-up water flowing', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/close-up water flowing..wav', duration: '5:15' },
      { title: 'Flowing Water After Rainfall', description: 'Flowing water after rainfall', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/Flowing water after rainfall..wav', duration: '6:00' },
      { title: 'Medium Close-Up River, Fast Flowing', description: 'Medium close-up river, fast flowing', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/medium close-up river, fast flowing..wav', duration: '6:30' },
      { title: 'Medium Close-Up Water Flowing', description: 'Medium close-up water flowing', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/medium close-up water flowing.wav', duration: '5:45' },
      { title: 'Small Fast Flowing Stream, Close Perspective', description: 'Small fast flowing stream, close perspective', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/Small fast flowing stream, close perspective .wav', duration: '4:30' },
      { title: 'Water Flowing into River Pool', description: 'Water flowing into river pool', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/Water flowing into river pool.wav', duration: '6:15' },
      { title: 'Water Partly Flowing Over Submerged Rock', description: 'Water partly flowing over submerged rock', file: '/sounds/ambient soundscape/nature sounds/RAIN/river/water partly flowing over submerged rock.wav', duration: '7:00' },
    ]
  },
  {
    subCategory: 'Thunder',
    sounds: [
      { title: 'Thunder & Rain', description: 'Thunder and rain soundscape', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/ Thunder & rain.wav', duration: '5:00' },
      { title: 'Roll of Thunder 2', description: 'Roll of thunder', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Roll of thunder. 2.wav', duration: '3:30' },
      { title: 'Roll of Thunder 3', description: 'Roll of thunder', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Roll of thunder. 3.wav', duration: '4:00' },
      { title: 'Roll of Thunder 4', description: 'Roll of thunder', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Roll of thunder.4.wav', duration: '3:45' },
      { title: 'Roll of Thunder 5', description: 'Roll of thunder', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Roll of thunder. 5.wav', duration: '4:15' },
      { title: 'Roll of Thunder 6', description: 'Roll of thunder', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Roll of thunder. 6.wav', duration: '4:30' },
      { title: 'Several Claps of Thunder and Start of Rain', description: 'Several claps of thunder and start of rain', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Several claps of thunder and start of rain.wav', duration: '6:00' },
      { title: 'Single Crack of Thunder', description: 'Single crack of thunder', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Single crack of thunder.wav', duration: '3:00' },
      { title: 'Thunderstorm With Light Rain', description: 'Thunderstorm with light rain', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Thunderstorm With Light Rain - Thunderstorm with light rain..wav', duration: '7:30' },
      { title: 'Thunderstorm With Light Rain - Wind & Rain in Street', description: 'Thunderstorm with light rain and wind in street', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Thunderstorm With Light Rain - Wind & rain in street.wav', duration: '6:30' },
      { title: 'Severe Thunderstorm with Light Rain', description: 'Severe thunderstorm with light rain', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Weather 2 - Storms - Severe thunder storm with light rain..wav', duration: '8:00' },
      { title: 'Thunderstorm with Light Rain', description: 'Thunderstorm with light rain', file: '/sounds/ambient soundscape/nature sounds/RAIN/thunder/Weather 2 - Storms - Thunder storm, with light rain..wav', duration: '7:00' },
    ]
  }
    ]
  },
  {
    category: 'Urban Sounds',
    subCategories: [
      {
        subCategory: 'City',
        sounds: [
          { title: 'BT Local Line Noise', description: 'BT local line noise', file: '/sounds/ambient soundscape/urban sounds/ BT local line noise.wav'},
          { title: 'Punch Card Reader Printer', description: 'Punch card reader printer', file: '/sounds/ambient soundscape/urban sounds/(Punch card reader_printer.).wav'},
          { title: 'Amstrad Dot-Matrix Printer', description: 'Amstrad Dot-Matrix Printer printing', file: '/sounds/ambient soundscape/urban sounds/Amstrad Dot-Matrix Printer printing.wav'},
          { title: 'Arabic Crowds', description: 'Arabic crowds', file: '/sounds/ambient soundscape/urban sounds/Arabic Crowds.wav'},
          { title: 'Café Ammassalik', description: 'Café Ammassalik', file: '/sounds/ambient soundscape/urban sounds/Cafe - Ammassalik.wav'},
          { title: 'Café Atmosphere', description: 'Cafe atmosphere, men chatter quite animatedly', file: '/sounds/ambient soundscape/urban sounds/Cafe atmosphere, men chatter quite aminatedly.wav'},
          { title: 'Café in Hospital Foyer', description: 'Cafe in hospital foyer', file: '/sounds/ambient soundscape/urban sounds/Cafe in hospital foyer..wav'},
          { title: 'Café Copenhagen', description: 'Cafe, Copenhagen', file: '/sounds/ambient soundscape/urban sounds/Cafe, Copenhagen.wav'},
          { title: 'Car Park Atmosphere', description: 'Car park atmosphere with close and distant traffic', file: '/sounds/ambient soundscape/urban sounds/Car park atmosphere with close and distant traffic .wav'},
          { title: 'Carrier Leaves', description: 'Carrier leaves filled with empty milk bottles', file: '/sounds/ambient soundscape/urban sounds/Carrier leaves filled with empty milk bottles..wav'},
          { title: 'Cash Registers', description: 'Cash registers', file: '/sounds/ambient soundscape/urban sounds/Cash Registers.wav'},
          { title: 'Chatter and Clatter of Plates', description: 'Chatter and clatter of plates', file: '/sounds/ambient soundscape/urban sounds/chatter and clatter of plates.wav'},
          { title: 'Chatter', description: 'Chatter', file: '/sounds/ambient soundscape/urban sounds/chatter.wav'},
          { title: 'Church Bells', description: 'Church bells with some distant traffic', file: '/sounds/ambient soundscape/urban sounds/Church Bells with some distant traffic.wav'},
          { title: 'Computer Typing', description: 'Computer, typing text', file: '/sounds/ambient soundscape/urban sounds/Computer, typing text.wav'},
          { title: 'Creed Keyboard Perforator', description: 'Creed keyboard perforator, 1925', file: '/sounds/ambient soundscape/urban sounds/Creed keyboard perforator, 1925..wav'},
          { title: 'Creed Morse Printer', description: 'Creed morse printer', file: '/sounds/ambient soundscape/urban sounds/Creed morse printer,.wav'},
          { title: 'Electric Typewriter', description: 'Electric typewriter fast typing', file: '/sounds/ambient soundscape/urban sounds/Electric Typewriter fast typing.wav'},
          { title: 'Epson Dot-Matrix Printer', description: 'Epson Dot-Matrix Printer', file: '/sounds/ambient soundscape/urban sounds/Epson Dot-Matrix Printer.wav'},
          { title: 'Extracting and Sorting Newspaper Cuttings', description: 'Extracting and sorting newspaper cuttings', file: '/sounds/ambient soundscape/urban sounds/extracting and sorting newspaper cuttings.wav'},
          { title: 'Football Crowd', description: 'Football crowd', file: '/sounds/ambient soundscape/urban sounds/Football crowd.wav'},
          { title: 'Galleried Reference Library', description: 'Galleried reference library, with footsteps and distant traffic', file: '/sounds/ambient soundscape/urban sounds/galleried reference library, with footsteps and distant traffic..wav'},
          { title: 'Juki Daisywheel Printer', description: 'Juki Daisywheel Printer switch on', file: '/sounds/ambient soundscape/urban sounds/Juki Daisywheel Printer switch on.wav'},
          { title: 'Manual Typewriter', description: 'Manual typewriter', file: '/sounds/ambient soundscape/urban sounds/Manual Typewriter.wav'},
          { title: 'Murmur of Distant Suburban Traffic', description: 'Murmur of distant suburban traffic', file: '/sounds/ambient soundscape/urban sounds/Murmur of distant suburban traffic..wav'},
          { title: 'Pool Game', description: 'Pool game', file: '/sounds/ambient soundscape/urban sounds/Pool Game.wav'},
          { title: 'Printer Operating', description: 'Printer operating (fast)', file: '/sounds/ambient soundscape/urban sounds/Printer operating (fast).wav'},
          { title: 'Pub Chatter 20-30 People', description: 'Pub chatter 20-30 people', file: '/sounds/ambient soundscape/urban sounds/pub chatter 20-30 people.wav'},
          { title: 'Pub Chatter 70 People', description: 'Pub chatter 70 people', file: '/sounds/ambient soundscape/urban sounds/pub chatter 70 people.wav'},
          { title: 'Public Library', description: 'Public Library with voices, footsteps, trolleys & a telephone', file: '/sounds/ambient soundscape/urban sounds/Public Library with voices, footsteps, trolleys & a telephone.wav'},
          { title: 'Pulse Monitor', description: 'Pulse monitor', file: '/sounds/ambient soundscape/urban sounds/pulse monitor.wav'},
          { title: 'Quiet Atmosphere in Galleried Reference Library', description: 'Quiet atmosphere in galleried reference library', file: '/sounds/ambient soundscape/urban sounds/quiet atmosphere in galleried reference library.wav'},
          { title: 'Quiet Transport Café', description: 'Quiet transport cafe with occasional speech and chatter', file: '/sounds/ambient soundscape/urban sounds/Quiet transport cafe with occasional speech and chatter.wav'},
          { title: 'Quiet with Some Paper Rustles', description: 'Quiet with some paper rustles, creaks of chairs, no speech', file: '/sounds/ambient soundscape/urban sounds/quiet with some paper rustles, creaks of chairs, no speech.wav'},
          { title: 'Room with Computer Disc Drives', description: 'Room with computer disc drives & heavy air conditioning, steady equipment sound & quiet intermittent beeps', file: '/sounds/ambient soundscape/urban sounds/Room with computer disc drives & heavy air conditioning, steady equipment sound & quiet intermittent beeps.wav'},
          { title: 'Rummaging in Full Skip', description: 'Rummaging in full skip with distant traffic', file: '/sounds/ambient soundscape/urban sounds/rummaging in full skip with distant traffic..wav'},
          { title: 'Saturday Night Atmosphere', description: 'Saturday night atmosphere', file: '/sounds/ambient soundscape/urban sounds/Saturday night atmosphere.wav'},
          { title: 'Small Café', description: 'Small Cafe', file: '/sounds/ambient soundscape/urban sounds/Small Cafe..wav'},
          { title: 'Small Town', description: 'Small town, children in playground', file: '/sounds/ambient soundscape/urban sounds/Small town, children in playground.wav'},
          { title: 'Tamanrasset', description: 'Tamanrasset, market atmosphere, with distant traffic', file: '/sounds/ambient soundscape/urban sounds/Tamanrasset, market atmosphere, with distant traffic..wav'},
          { title: 'Traffic at Night', description: 'Traffic at night', file: '/sounds/ambient soundscape/urban sounds/Traffic at night.wav'},
          { title: 'Traffic Atmosphere from Rooftop', description: 'Traffic atmosphere from roof top, with wind & birds', file: '/sounds/ambient soundscape/urban sounds/traffic atmosphere from roof top, with wind & birds.wav'},
          { title: 'Traffic Through Park', description: 'Traffic through park, Mountain', file: '/sounds/ambient soundscape/urban sounds/Traffic through park, Mountain.wav'},
          { title: 'Typing with Three Hands', description: 'Typing with three hands', file: '/sounds/ambient soundscape/urban sounds/Typing with three hands.wav'},
          { title: 'Village and Playground Atmospheres', description: 'Village and Playground Atmospheres', file: '/sounds/ambient soundscape/urban sounds/Village And Playground Atmospheres.wav'},
          // Add more urban sounds...
        ]
      }
    ]
  }
];


const FreePlay = () => {
  const [mix, setMix] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState({ base: true, samples: true });
  const [isMixPlaying, setIsMixPlaying] = useState(false);
  const waveSurferRefs = useRef([]);
  const audioContext = useRef(null);
  const audioRef = useRef(null);
  const audioRefs = useRef([]); // Store individual audio elements and nodes

  useEffect(() => {
    return () => {
      mix.forEach((track) => {
        track.howl?.unload();
        waveSurferRefs.current[track.file]?.destroy();
      });
    };
  }, [mix]);

  const initializeAudioContext = () => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.current.state === 'suspended') {
      audioContext.current.resume();
    }
  };

  const loadImpulseResponse = async (url) => {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      return await audioContext.current.decodeAudioData(arrayBuffer);
    } catch (error) {
      console.error('Error loading impulse response:', error);
      throw new Error('Decoding failed');
    }
  };

  const createAudioNodes = async (index, file) => {
    initializeAudioContext();

    try {
      const audio = new Audio(file);
      const source = audioContext.current.createMediaElementSource(audio);
      const gainNode = audioContext.current.createGain();
      const pannerNode = audioContext.current.createStereoPanner();
      const convolverNode = audioContext.current.createConvolver();

      // Load an impulse response for reverb
      const impulseResponse = await loadImpulseResponse('/sounds/Drum Chamber.wav');
      convolverNode.buffer = impulseResponse;

      // Store references to audio nodes for real-time control
      audioRefs.current[index] = {
        audio,
        source,
        gainNode,
        pannerNode,
        convolverNode,
      };

      source.connect(gainNode);
      gainNode.connect(pannerNode);
      pannerNode.connect(convolverNode);
      convolverNode.connect(audioContext.current.destination);

      return audio; // Return the audio element for further control
    } catch (error) {
      console.error('Error creating audio nodes:', error);
      throw new Error('Audio node creation failed');
    }
  };

  const handleAddToMix = (sound, isBaseSound = false) => {
    if (isBaseSound) {
      const baseSoundInMix = mix.find(track => track.isBaseSound);
      if (baseSoundInMix) {
        alert("You can only add one base sound to the mix. Please choose from the sound samples.");
        return;
      }
    }

    const newTrack = {
      ...sound,
      howl: new Howl({ src: [sound.file] }),
      panValue: 0,
      reverbValue: 0,
      volumeValue: 100,
      isReverbOn: false, // Initialize the reverb state
      isBaseSound: isBaseSound
    };
    setMix([...mix, newTrack]);
  };

  const handlePlayMix = async () => {
    try {
      if (!isMixPlaying) {
        for (const [index, track] of mix.entries()) {
          const audio = await createAudioNodes(index, track.file);
          audio.play(); // Play the track
          track.isPlaying = true;
        }
        setIsMixPlaying(true);
      } else {
        mix.forEach((track, index) => {
          const { audio } = audioRefs.current[index];
          if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset to start
            track.isPlaying = false;
          }
        });
        setIsMixPlaying(false);
      }
      setMix([...mix]);
    } catch (error) {
      console.error('Error playing mix:', error);
    }
  };

  const handleStopMix = () => {
    mix.forEach((track, index) => {
      audioRefs.current[index].audio.pause();
      audioRefs.current[index].audio.currentTime = 0; // Reset to start
      track.isPlaying = false;
    });
    setIsMixPlaying(false);
    setMix([...mix]);
  };

  const toggleTrackPlayPause = (index) => {
    const track = mix[index];
    const { audio } = audioRefs.current[index];
    if (track.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    track.isPlaying = !track.isPlaying;
    setMix([...mix]);
  };

  const updateTrackEffects = (index, effectType, value) => {
    const updatedMix = [...mix];
    const track = updatedMix[index];
    const { gainNode, pannerNode, convolverNode } = audioRefs.current[index];

    switch (effectType) {
      case 'pan':
        track.panValue = value;
        pannerNode.pan.value = value; // Panning from -1 (left) to 1 (right)
        break;
      case 'reverb':
        track.reverbValue = value;
        // Reverb value adjustment
        break;
      case 'volume':
        track.volumeValue = value;
        gainNode.gain.value = value / 100; // Normalize volume control
        break;
      default:
        break;
    }

    setMix(updatedMix);
  };

  const handlePlayPause = (file) => {
    initializeAudioContext();

    if (currentFile !== file) {
      if (audioRef.current) {
        audioRef.current.pause(); // Pause the currently playing track
        audioRef.current.currentTime = 0; // Reset the track to the start
      }

      const audio = new Audio(file);
      audioRef.current = audio; // Store the Audio object in a ref
      setCurrentFile(file);
      audio.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the current track
      } else {
        audioRef.current.play(); // Resume playing the current track
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSaveMix = () => {
    const mixName = prompt("Enter a name for your mix:");
    if (mixName) {
      const newMix = {
        name: mixName,
        tracks: mix.map(track => track.title),
        date: new Date(),
        mix: mix,
      };
      const savedMixes = JSON.parse(localStorage.getItem('savedMixes')) || [];
      savedMixes.push(newMix);
      localStorage.setItem('savedMixes', JSON.stringify(savedMixes));
      alert("Mix saved!");
    }
  };

  const toggleReverb = (index) => {
    try {
      const updatedMix = [...mix];
      const track = updatedMix[index];

      // Check if the track and convolverNode are properly initialized
      if (track && audioRefs.current[index] && audioRefs.current[index].convolverNode) {
        track.isReverbOn = !track.isReverbOn;

        const { convolverNode } = audioRefs.current[index];
        if (track.isReverbOn) {
          convolverNode.connect(audioContext.current.destination);
        } else {
          convolverNode.disconnect(audioContext.current.destination);
        }

        setMix(updatedMix);
      } else {
        console.warn(`Track or convolverNode at index ${index} is undefined or not initialized.`);
      }
    } catch (error) {
      console.error("An error occurred while toggling reverb:", error);
    }
  };

  // Function to decrease volume
  const decreaseVolume = (index) => {
    const updatedMix = [...mix];
    const track = updatedMix[index];
    if (track.volumeValue > 0) {
      track.volumeValue -= 5;
      audioRefs.current[index].gainNode.gain.value = track.volumeValue / 100;
    }
    setMix(updatedMix);
  };

  // Function to increase volume
  const increaseVolume = (index) => {
    const updatedMix = [...mix];
    const track = updatedMix[index];
    if (track.volumeValue < 100) {
      track.volumeValue += 5;
      audioRefs.current[index].gainNode.gain.value = track.volumeValue / 100;
    }
    setMix(updatedMix);
  };

  const handleDeleteTrack = (index) => {
    const updatedMix = mix.filter((_, i) => i !== index);
    setMix(updatedMix);

    // Optionally, stop the track if it's playing
    if (audioRefs.current[index]) {
      audioRefs.current[index].audio.pause();
      audioRefs.current[index].audio.currentTime = 0;
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="free-play-page">
        <video className="background-video" autoPlay loop muted>
          <source src="https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/waveform.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="header">
          <h1>Free Play</h1>
        </div>
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Customize Your Soundscapes</h1>
            <p className="hero-description">
              Mix and match your favorite ambient sounds to create the perfect atmosphere
            </p>
          </div>
        </div>
        <div className="free-play-container">
          <div className="left-section">
            <button
              className="select-button"
              onClick={() => setIsCollapsed({ ...isCollapsed, base: !isCollapsed.base })}
            >
              Select Base Sound {isCollapsed.base ? <FaChevronDown /> : <FaChevronUp />}
            </button>
            {!isCollapsed.base && (
              <div className="sound-list scrollable">
                {soundscapes.map((sound, index) => (
                  <div key={index} className="sound-item">
                    <div className="sound-info">
                      <h3>{sound.title}</h3>
                      <p>{sound.description}</p>
                    </div>
                    <div className="sound-actions">
                      <button
                        className="action-button"
                        onClick={() => handlePlayPause(sound.file)}
                      >
                        {isPlaying && currentFile === sound.file ? <FaPause /> : <FaPlay />}
                      </button>
                      <button
                        className="action-button"
                        onClick={() => handleAddToMix(sound)}
                      >
                        <FaPlus />
                      </button>
                      <span>{sound.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button
              className="select-button"
              onClick={() => setIsCollapsed({ ...isCollapsed, samples: !isCollapsed.samples })}
            >
              Select Ambient Soundscapes {isCollapsed.samples ? <FaChevronDown /> : <FaChevronUp />}
            </button>
            {!isCollapsed.samples && (
              <div className="sound-list scrollable">
                {soundSamples.map((category, catIndex) => (
                  <div key={catIndex} className="category-section">
                    <h3>{category.category}</h3>
                    {category.subCategories.map((subCat, subIndex) => (
                      <div key={subIndex}>
                        <h4>{subCat.subCategory}</h4>
                        {subCat.sounds.map((sound, soundIndex) => (
                          <div key={soundIndex} className="sound-item">
                            <div className="sound-info">
                              <h3>{sound.title}</h3>
                              <p>{sound.description}</p>
                            </div>
                            <div className="sound-actions">
                              <button
                                className="action-button"
                                onClick={() => handlePlayPause(sound.file)}
                              >
                                {isPlaying && currentFile === sound.file ? <FaPause /> : <FaPlay />}
                              </button>
                              <button
                                className="action-button"
                                onClick={() => handleAddToMix(sound)}
                              >
                                <FaPlus />
                              </button>
                              <span>{sound.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="right-section">
            <div className="mix-controls">
              <button className="control-button" onClick={handlePlayMix}>
                {isMixPlaying ? 'Stop Mix' : 'Play Mix'}
              </button>
              <button className="control-button" onClick={handleStopMix}>Stop All</button>
              <button onClick={handleSaveMix} className="btn-primary">Save Mix</button>
            </div>
            {mix.map((track, index) => (
              <div key={index} className="mix-item">
                <div className="mix-info">
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                </div>
                <div className="mix-controls">
                  {/* Reverb Switch */}
                  <div className="reverb-switch-container">
                    <label>Reverb</label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={track.isReverbOn}
                        onChange={() => toggleReverb(index)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  {/* Volume Control with + and - Icons */}
                  <div className="track-controls">
                    <label>Volume</label>
                    <FaMinus onClick={() => decreaseVolume(index)} />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={track.volumeValue || 100}
                      onChange={(e) =>
                        updateTrackEffects(index, 'volume', parseFloat(e.target.value))
                      }
                    />
                    <FaPlus onClick={() => increaseVolume(index)} />
                  </div>

                  {/* Panning Control with Left, Center, Right Labels */}
                  <div className="track-controls">
                    <label>Panning</label>
                    <span>Left</span>
                    <input
                      type="range"
                      min="-1"
                      max="1"
                      step="0.01"
                      value={track.panValue || 0}
                      onChange={(e) =>
                        updateTrackEffects(index, 'pan', parseFloat(e.target.value))
                      }
                    />
                    <span>Right</span>
                  </div>
                </div>
                <div className="mix-actions">
                  <button
                    className="action-button"
                    onClick={() => toggleTrackPlayPause(index)}
                  >
                    {track.isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button
                    className="action-button"
                    onClick={() => handleDeleteTrack(index)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="questionnaire-section">
          <h2>Post-Listening Playground Questionnaire</h2>
          <p>
            Help us understand your state after exploring and customizing your soundscapes
          </p>
          <Link to="/playgroundQuestionnaire">
            <button className="btn-primary">Start the Form</button>
          </Link>
        </div>
      </div>
    </DndProvider>
  );
}
  export default FreePlay;