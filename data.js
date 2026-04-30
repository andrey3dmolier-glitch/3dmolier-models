const models = [
  {
    title: "Hydraulic Canal Lock Gate System Rigged for Cinema 4D 3D Model",
    category: "industrial",
    description: "Rigged hydraulic canal lock gate system for infrastructure visualization, engineering animation, urban design and technical waterway scenes.",
    tags: ["Infrastructure", "Industrial", "Rigged", "Cinema 4D"],
    url: "https://www.turbosquid.com/3d-models/3d-model-hydraulic-canal-lock-gate-system-rigged-for-cinema-4d-2562902",
    image: "https://p.turbosquid.com/ts-thumb/CT/zh4Jxt/rK/hydraulic_canal_lock_gate_system_rigged_002/jpg/1777510156/1920x1080/fit_q87/0f11f9dca3ff9b1ec808203a86c664474ce6e289/hydraulic_canal_lock_gate_system_rigged_002.jpg"
  },
  {
    title: "Hydraulic Canal Lock Gate System Rigged for Maya 3D Model",
    category: "industrial",
    description: "Maya-ready canal lock mechanism with hydraulic gates for dam, waterway, city infrastructure and technical animation projects.",
    tags: ["Infrastructure", "Dam", "Maya", "Rigged"],
    url: "https://www.turbosquid.com/3d-models/hydraulic-canal-lock-gate-system-rigged-for-maya-model-2562901",
    image: "https://p.turbosquid.com/ts-thumb/91/e4Ak5y/GL/hydraulic_canal_lock_gate_system_rigged_002/jpg/1777510498/1920x1080/fit_q87/b2ea86814730aad22f19ce5aa6811d06e07c41a5/hydraulic_canal_lock_gate_system_rigged_002.jpg"
  },
  {
    title: "Thales Autonomous Saildrone Vessel Explorer Rigged 3D Model",
    category: "naval",
    description: "Autonomous saildrone vessel for maritime robotics, ocean monitoring, research visualization, simulation and technical marine scenes.",
    tags: ["Vessel", "Drone", "Marine", "Rigged"],
    url: "https://www.turbosquid.com/3d-models/thales-autonomous-saildrone-vessel-explorer-rigged-3d-model-2562898",
    image: "https://p.turbosquid.com/ts-thumb/oa/l8id1q/Z8/thales_autonomous_saildrone_vessel_explorer_rigged_002/jpg/1777516371/1920x1080/fit_q87/898b51398c1cbb23bd14ea757348e984a62455b4/thales_autonomous_saildrone_vessel_explorer_rigged_002.jpg"
  },
  {
    title: "Volvo VNL 860 Highway Tractor Unit Black Rigged 3D Model",
    category: "industrial",
    description: "Detailed rigged highway tractor unit for logistics visualization, transport animation, commercial truck renders and industrial scenes.",
    tags: ["Truck", "Logistics", "Rigged", "Vehicle"],
    url: "https://www.turbosquid.com/3d-models/3d-volvo-vnl-860-highway-tractor-unit-black-rigged-2562897",
    image: "https://p.turbosquid.com/ts-thumb/je/Hsd0Fq/dj/volvo_vnl_860_highway_tractor_unit_black_rigged_002/jpg/1777511067/1920x1080/fit_q87/ddbe26e79104bf6a1f54ef478be1edf84a0dd727/volvo_vnl_860_highway_tractor_unit_black_rigged_002.jpg"
  },
  {
    title: "Aerodynamic Sleeper Cab Tractor Unit Rigged 3D Model",
    category: "industrial",
    description: "Rigged aerodynamic sleeper cab tractor for freight transport scenes, vehicle animation, product rendering and logistics visualization.",
    tags: ["Truck", "Transport", "Rigged", "Vehicle"],
    url: "https://www.turbosquid.com/3d-models/aerodynamic-sleeper-cab-tractor-unit-rigged-3d-model-2562896",
    image: "https://p.turbosquid.com/ts-thumb/xW/yXzwsd/UQ/aerodynamic_sleeper_cab_tractor_unit_rigged_002/jpg/1777514964/1920x1080/fit_q87/ab345f80ce8f9807ce0e8f6067fca472232588c7/aerodynamic_sleeper_cab_tractor_unit_rigged_002.jpg"
  },
  {
    title: "US Military MRE Ration Pack with Food 3D Model",
    category: "military",
    description: "Military ration pack asset with food items for defense visualization, survival equipment scenes, training content and close-up renders.",
    tags: ["Military", "MRE", "Food", "Equipment"],
    url: "https://www.turbosquid.com/3d-models/3d-us-military-mre-ration-pack-with-food-model-2562895",
    image: "https://p.turbosquid.com/ts-thumb/rF/BE7dU3/iU/us_military_mre_ration_pack_with_food_002/jpg/1777515357/1920x1080/fit_q87/c5a160913102ac12e06448ea4e22510e7a99d834/us_military_mre_ration_pack_with_food_002.jpg"
  },
  {
    title: "Volvo VNL 860 Sleeper Tractor with Cargo Trailer 3D Model",
    category: "industrial",
    description: "Sleeper tractor and cargo trailer combination for road freight, logistics simulations, transport visualization and animation projects.",
    tags: ["Truck", "Trailer", "Logistics", "Vehicle"],
    url: "https://www.turbosquid.com/3d-models/volvo-vnl-860-sleeper-tractor-with-cargo-trailer-3d-2562893",
    image: "https://p.turbosquid.com/ts-thumb/p9/M7lcF6/vB/volvo_vnl_860_sleeper_tractor_with_cargo_trailer_002/jpg/1777515631/1920x1080/fit_q87/484a8ffdddf84fe6961879913ed826e35365ed6e/volvo_vnl_860_sleeper_tractor_with_cargo_trailer_002.jpg"
  },
  {
    title: "Tupolev Tu-141 Strizh Surveillance Drone Rigged 3D Model",
    category: "uav",
    description: "Rigged surveillance drone model for UAV visualization, military aviation scenes, simulation, animation and technical presentation work.",
    tags: ["UAV", "Drone", "Aircraft", "Rigged"],
    url: "https://www.turbosquid.com/3d-models/3d-tupolev-tu141-strizh-surveillance-drone-rigged-2562892",
    image: "https://p.turbosquid.com/ts-thumb/VD/OPghGf/lZ/tupolev_tu141_strizh_surveillance_drone_rigged_002/jpg/1777516110/1920x1080/fit_q87/4b7d61d9b889db3b4d3c3d89c76724a3e7b6e30f/tupolev_tu141_strizh_surveillance_drone_rigged_002.jpg"
  },
  {
    title: "Sports Lighting Tower on Foundation Simplified 3D Model",
    category: "industrial",
    description: "Simplified lighting tower asset for stadium environments, construction scenes, infrastructure visualization and exterior render projects.",
    tags: ["Lighting", "Tower", "Infrastructure", "Simplified"],
    url: "https://www.turbosquid.com/3d-models/sports-lighting-tower-on-foundation-simplified-model-2562889",
    image: "https://p.turbosquid.com/ts-thumb/1k/mqXMWw/yN/sports_lighting_tower_on_foundation_simplified_001/jpg/1777515938/1920x1080/fit_q87/cc2ce55da1cc7f291d1c46d15e7ae2a9d29bd70c/sports_lighting_tower_on_foundation_simplified_001.jpg"
  },
  {
    title: "Aerodynamic Sleeper Cab Tractor Unit Blue Simplified 3D Model",
    category: "industrial",
    description: "Simplified blue sleeper cab tractor for vehicle visualization, traffic scenes, logistics renders and real-time environment setups.",
    tags: ["Truck", "Vehicle", "Simplified", "Transport"],
    url: "https://www.turbosquid.com/3d-models/3d-model-aerodynamic-sleeper-cab-tractor-unit-blue-simplified-2562887",
    image: "https://p.turbosquid.com/ts-thumb/dT/JRGouk/6h/aerodynamic_sleeper_cab_tractor_unit_blue_simplified_002/jpg/1777513413/1920x1080/fit_q87/19075bd8a4dbe94c986c418f6ec4f1ad7003a923/aerodynamic_sleeper_cab_tractor_unit_blue_simplified_002.jpg"
  },
  {
    title: "2026 Volvo VNL 860 Truck White Simplified 3D Model",
    category: "industrial",
    description: "White Volvo VNL truck model for transportation visualization, fleet scenes, highway renders and commercial vehicle presentations.",
    tags: ["Truck", "Volvo", "Vehicle", "Simplified"],
    url: "https://www.turbosquid.com/3d-models/2026-volvo-vnl-860-truck-white-simplified-3d-model-2562886",
    image: "https://p.turbosquid.com/ts-thumb/OC/DGB35n/3M/2026_volvo_vnl_860_truck_white_simplified_002/jpg/1777513139/1920x1080/fit_q87/4adc16ad2c41e2ea81ca070b486de6479ebce3e6/2026_volvo_vnl_860_truck_white_simplified_002.jpg"
  },
  {
    title: "Aerodynamic Tractor Unit with Lowbed Trailer 3D Model",
    category: "industrial",
    description: "Aerodynamic tractor with lowbed trailer for heavy transport scenes, construction logistics, vehicle animation and technical renders.",
    tags: ["Truck", "Lowbed", "Trailer", "Industrial"],
    url: "https://www.turbosquid.com/3d-models/3d-aerodynamic-tractor-unit-with-lowbed-trailer-2562885",
    image: "https://p.turbosquid.com/ts-thumb/Os/dxAT08/y3/aerodynamic_tractor_unit_with_lowbed_trailer_002/jpg/1777512845/1920x1080/fit_q87/78cdb0bbe3a8f3dce9ee7696c9a9af0732047d4b/aerodynamic_tractor_unit_with_lowbed_trailer_002.jpg"
  },
  {
    title: "Animal Skeletons Rigged for Maya Collection 3D Model Bundle",
    category: "anatomy",
    description: "Rigged animal skeleton collection for Maya, suitable for educational visualization, creature animation and anatomy reference scenes.",
    tags: ["Anatomy", "Animal", "Skeleton", "Bundle"],
    url: "https://www.turbosquid.com/3d-models/animal-skeletons-rigged-for-maya-collection-3d-2562716",
    image: "https://p.turbosquid.com/ts-thumb/hq/3mQl9x/2b/animal_skeletons_rigged_for_maya_collection_000/jpg/1777471131/1920x1080/fit_q87/ab9f4c8a474895086c58b6a40beace54529dda83/animal_skeletons_rigged_for_maya_collection_000.jpg"
  },
  {
    title: "Dog and Cat Skeletal Anatomy Collection 3D Model Bundle",
    category: "anatomy",
    description: "Dog and cat skeletal anatomy collection for veterinary education, animal anatomy visualization, reference renders and learning content.",
    tags: ["Anatomy", "Dog", "Cat", "Skeleton"],
    url: "https://www.turbosquid.com/3d-models/dog-and-cat-skeletal-anatomy-collection-3d-2562690",
    image: "https://p.turbosquid.com/ts-thumb/Wy/sC1rbn/bM/dog_and_cat_skeletal_anatomy_collection_000/jpg/1777470071/1920x1080/fit_q87/15a07f792bd1775e5a85ea4fababb8e0d56c05bf/dog_and_cat_skeletal_anatomy_collection_000.jpg"
  },
  {
    title: "Uncrewed Ocean Survey Vessel with Solar Panels 3D Model",
    category: "naval",
    description: "Autonomous marine survey vessel with solar panels for ocean research, environmental monitoring, maritime simulation and VR/AR scenes.",
    tags: ["Vessel", "Marine", "Solar", "Drone"],
    url: "https://www.turbosquid.com/3d-models/uncrewed-ocean-survey-vessel-with-solar-panels-model-2562553",
    image: "https://p.turbosquid.com/ts-thumb/Yr/3HMiIW/jm/uncrewed_ocean_survey_vessel_with_solar_panels_002/jpg/1777424416/1920x1080/fit_q87/9744b8f3f301a5fff640a2c4f60ba5427a426198/uncrewed_ocean_survey_vessel_with_solar_panels_002.jpg"
  },
  {
    title: "High Speed Recon UAV with Long Fuselage Rigged 3D Model",
    category: "uav",
    description: "Rigged high-speed reconnaissance UAV with long fuselage for military aviation visualization, simulation, animation and technical renders.",
    tags: ["UAV", "Recon", "Aircraft", "Rigged"],
    url: "https://www.turbosquid.com/3d-models/3d-model-high-speed-recon-uav-with-long-fuselage-rigged-2562547",
    image: "https://p.turbosquid.com/ts-thumb/tV/EKxp7N/ut/high_speed_recon_uav_with_long_fuselage_rigged_002/jpg/1777406311/1920x1080/fit_q87/b8a76a086a12c0aaef6d80ab6c5787b64cdcadca/high_speed_recon_uav_with_long_fuselage_rigged_002.jpg"
  },
  {
    title: "Shield AI MQ-35 V-BAT Drone 3D Model",
    category: "uav",
    description: "MQ-35 V-BAT drone model for UAV visualization, unmanned aircraft scenes, defense presentation, animation and simulation projects.",
    tags: ["UAV", "Drone", "Aircraft", "VTOL"],
    url: "https://www.turbosquid.com/3d-models/shield-ai-mq35-vbat-drone-3d-model-2562546",
    image: "https://p.turbosquid.com/ts-thumb/Vp/T6Pmtf/6z/shield_ai_mq35_vbat_drone_001/jpg/1777413202/1920x1080/fit_q87/cd91aaa7e7fcb36f97eeaf7b2fb0744437715f03/shield_ai_mq35_vbat_drone_001.jpg"
  },
  {
    title: "Military Supply Ship with Industrial Deck Layout Rigged 3D Model",
    category: "naval",
    description: "Rigged military supply ship with industrial deck layout for naval logistics visualization, maritime animation and defense scenes.",
    tags: ["Naval", "Ship", "Military", "Rigged"],
    url: "https://www.turbosquid.com/3d-models/military-supply-ship-with-industrial-deck-layout-rigged-3d-2562545",
    image: "https://p.turbosquid.com/ts-thumb/95/Fi0azN/Q7/military_supply_ship_with_industrial_deck_layout_rigged_001/jpg/1777412836/1920x1080/fit_q87/2f35c4c7b1228762d450651c4236859365990142/military_supply_ship_with_industrial_deck_layout_rigged_001.jpg"
  },
  {
    title: "MH-6 Little Bird Helicopter with Rocket Pod 3D Model",
    category: "aircraft",
    description: "Detailed MH-6 Little Bird helicopter with rocket pod for military aviation scenes, animation, game environments and close-up renders.",
    tags: ["Aircraft", "Helicopter", "Military", "MH-6"],
    url: "https://www.turbosquid.com/3d-models/3d-mh6-little-bird-helicopter-with-rocket-pod-model-2562538",
    image: "https://p.turbosquid.com/ts-thumb/yr/J15uZc/rl/mh6_little_bird_helicopter_with_rocket_pod_002/jpg/1777419123/1920x1080/fit_q87/4e19713c1dca57df50f49241549fbff16578aeb9/mh6_little_bird_helicopter_with_rocket_pod_002.jpg"
  },
  {
    title: "Aircraft Turboshaft Engine Sectioned Cutaway 3D Model",
    category: "aircraft",
    description: "Sectioned aircraft turboshaft engine cutaway for aerospace education, technical animation, product explanation and engineering renders.",
    tags: ["Aircraft", "Engine", "Cutaway", "Technical"],
    url: "https://www.turbosquid.com/3d-models/3d-model-aircraft-turboshaft-engine-sectioned-cutaway-2562530",
    image: "https://p.turbosquid.com/ts-thumb/TP/28JOLK/dV/aircraft_turboshaft_engine_sectioned_cutaway_002/jpg/1777412586/1920x1080/fit_q87/863ae270c52158e4f627ee15df59db6c77a8f145/aircraft_turboshaft_engine_sectioned_cutaway_002.jpg"
  }
];
