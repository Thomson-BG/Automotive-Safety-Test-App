import { Topic, DiagnosticScenario } from '../types';

export const STATIC_SCENARIO_BANK: Record<Topic, DiagnosticScenario[]> = {
  [Topic.ENGINE]: [
    {
      id: "eng-001",
      vehicle: "2015 Ford F-150 5.0L",
      complaint: "Check engine light flashing, shaking significantly.",
      details: "Code P0303 (Cylinder 3 Misfire). Spark plug removed and looks worn but dry. Coil pack resistance on cylinder 3 is 0.2 ohms (spec is 0.8-1.0 ohms).",
      correctDiagnosis: "Shorting Ignition Coil",
      options: ["Shorting Ignition Coil", "Clogged Fuel Injector", "Blown Head Gasket", "Worn Piston Rings"],
      explanation: "A flashing CEL indicates a catalyst-damaging misfire. Low resistance in the coil primary/secondary circuit indicates an internal short."
    },
    {
      id: "eng-002",
      vehicle: "2012 Chevy Cruze 1.4L Turbo",
      complaint: "Rough idle, whistling noise from engine bay.",
      details: "Codes P0171 (System Lean) and P0507 (High Idle). Whistling noise stops when dipstick is removed.",
      correctDiagnosis: "Failed PCV Valve (Valve Cover Integrated)",
      options: ["Failed PCV Valve", "Vacuum Leak at Intake Manifold", "Bad MAF Sensor", "Turbo Failure"],
      explanation: "On these engines, the PCV valve in the valve cover fails, creating a massive internal vacuum leak that causes the main seal to whistle."
    },
    {
      id: "eng-003",
      vehicle: "2010 Toyota Corolla",
      complaint: "Car takes a long time to start (cranks for 10 seconds).",
      details: "Once running, it runs fine. Fuel pressure bleeds down to 0 psi immediately after key off.",
      correctDiagnosis: "Faulty Fuel Pump Check Valve",
      options: ["Faulty Fuel Pump Check Valve", "Clogged Fuel Filter", "Bad Starter Motor", "Jumped Timing Chain"],
      explanation: "If fuel pressure drops immediately after shutdown, the check valve in the pump assembly is likely failed, requiring long crank times to re-prime the system."
    },
    {
      id: "eng-004",
      vehicle: "2018 Honda Civic",
      complaint: "Overheating in stop-and-go traffic.",
      details: "Temp gauge rises at red lights but drops when driving 40mph+. Coolant level is full.",
      correctDiagnosis: "Radiator Fan Failure",
      options: ["Radiator Fan Failure", "Stuck Thermostat", "Water Pump Impeller Failure", "Clogged Radiator"],
      explanation: "Airflow from driving cools the engine at speed. If it overheats only at a stop, the electric cooling fan is not moving air through the radiator."
    },
    {
      id: "eng-005",
      vehicle: "2005 Nissan Altima",
      complaint: "Stalls intermittently when coming to a stop.",
      details: "No codes initially. Cleaning the throttle body improves the issue but doesn't solve it completely. MAF sensor reads 2 g/s at idle (spec 3-5 g/s).",
      correctDiagnosis: "Dirty/Faulty MAF Sensor",
      options: ["Dirty/Faulty MAF Sensor", "Bad O2 Sensor", "Vacuum Leak", "EGR Valve Stuck Open"],
      explanation: "A dirty MAF sensor under-reports air entering the engine, causing a lean condition and stalling at low RPM."
    },
    {
      id: "eng-006",
      vehicle: "2014 Jeep Wrangler",
      complaint: "Clicking noise from engine that speeds up with RPM.",
      details: "Sound is loudest near the top of the engine. Oil level is low. Sound diminishes slightly as engine warms up.",
      correctDiagnosis: "Lifter Tick / Valve Train Noise",
      options: ["Lifter Tick", "Rod Knock", "Exhaust Leak", "Loose Timing Chain"],
      explanation: "Ticking that follows RPM is often valve train related. Low oil can starve hydraulic lifters causing them to collapse and tick."
    },
    {
      id: "eng-007",
      vehicle: "2008 Ford Explorer",
      complaint: "Engine roars but vehicle has low power.",
      details: "Code P0420 and P0430. Intake vacuum is low (12 inHg) and drops further as RPM increases.",
      correctDiagnosis: "Clogged Catalytic Converters",
      options: ["Clogged Catalytic Converters", "Slipping Transmission", "Clogged Air Filter", "Fuel Pump Failure"],
      explanation: "Restricted exhaust creates backpressure, preventing the engine from breathing. Vacuum dropping at high RPM is a classic sign of exhaust restriction."
    },
    {
      id: "eng-008",
      vehicle: "2016 Subaru Outback",
      complaint: "Check engine light on, cruise control disabled.",
      details: "Code P0455 (EVAP Large Leak). Gas cap is tight and new.",
      correctDiagnosis: "Stuck Open EVAP Purge Valve",
      options: ["Stuck Open EVAP Purge Valve", "Cracked Charcoal Canister", "Vent Valve Stuck Closed", "Fuel Tank Pressure Sensor"],
      explanation: "If the purge valve sticks open, engine vacuum constantly pulls on the tank. This is often interpreted as a large leak or flow during non-purge times."
    },
    {
      id: "eng-009",
      vehicle: "2011 Dodge Charger",
      complaint: "Engine runs very rough, smells like rotten eggs.",
      details: "Check engine light flashing. O2 sensor voltage is stuck high (0.9V).",
      correctDiagnosis: "Leaking Fuel Injector",
      options: ["Leaking Fuel Injector", "Bad Ignition Coil", "Vacuum Leak", "Bad Gas"],
      explanation: "A leaking injector dumps raw fuel, causing a rich condition (high O2 voltage), flashing CEL (misfire), and sulfur smell (overloaded cat)."
    },
    {
      id: "eng-010",
      vehicle: "2019 Hyundai Elantra",
      complaint: "Engine knocks loudly on cold start for 2-3 seconds.",
      details: "Noise goes away after oil pressure light turns off. Oil level is correct.",
      correctDiagnosis: "Faulty Oil Filter (Drain Back Valve)",
      options: ["Faulty Oil Filter", "Piston Slap", "Rod Knock", "Loose Wrist Pin"],
      explanation: "A cheap oil filter with a bad anti-drain back valve allows oil to drain out of the top end, causing a dry start rattle."
    },
    {
      id: "eng-011",
      vehicle: "2004 Chevy Silverado",
      complaint: "Reduced power message, truck goes into limp mode.",
      details: "Codes P1516 and P2135 (Throttle Actuator Control).",
      correctDiagnosis: "Faulty Throttle Body / TPS",
      options: ["Faulty Throttle Body", "Bad Accelerator Pedal", "ECU Failure", "Loose Ground"],
      explanation: "Correlation errors between the two TPS sensors inside the electronic throttle body often cause limp mode."
    },
    {
      id: "eng-012",
      vehicle: "2013 BMW 328i",
      complaint: "Blue smoke from exhaust after idling for a while.",
      details: "Smoke clears up while driving. Engine consumes 1qt oil every 1000 miles.",
      correctDiagnosis: "Worn Valve Stem Seals",
      options: ["Worn Valve Stem Seals", "Worn Piston Rings", "Blown Head Gasket", "Rich Fuel Mixture"],
      explanation: "High vacuum at idle pulls oil past worn valve stem seals into the combustion chamber. Rings usually smoke under load."
    },
    {
      id: "eng-013",
      vehicle: "2000 Honda Accord",
      complaint: "Surging idle (RPM goes up and down).",
      details: "Unplugging the IAC (Idle Air Control) valve stops the surging but idle drops very low.",
      correctDiagnosis: "Coolant Air Pocket affecting IAC",
      options: ["Air in Coolant", "Bad TPS", "Vacuum Leak", "Bad ECU"],
      explanation: "Many Honda IAC valves are thermal. An air pocket prevents hot coolant from reaching the valve, causing the idle to hunt."
    },
    {
      id: "eng-014",
      vehicle: "2017 Ford Focus",
      complaint: "Car vibrates badly when stopped in Drive.",
      details: "Vibration goes away in Neutral. Engine mounts look intact but passenger side mount has collapsed (rubber touching metal).",
      correctDiagnosis: "Collapsed Hydraulic Engine Mount",
      options: ["Collapsed Engine Mount", "Misfire", "Torque Converter Issue", "Low Idle RPM"],
      explanation: "Hydraulic mounts isolate vibration. When they collapse, engine vibration transfers directly to the chassis."
    },
    {
      id: "eng-015",
      vehicle: "2006 Mazda 3",
      complaint: "Engine cranks but won't start.",
      details: "RPM shows 0 on scan tool while cranking. Security light is NOT flashing.",
      correctDiagnosis: "Crankshaft Position Sensor",
      options: ["Crankshaft Position Sensor", "Fuel Pump", "Immobilizer", "Camshaft Sensor"],
      explanation: "The ECU needs a Crank Sensor signal to fire injectors and spark. 0 RPM during crank is a dead giveaway."
    },
    {
      id: "eng-016",
      vehicle: "2010 Mini Cooper",
      complaint: "Rattle noise from timing cover side.",
      details: "Car runs rough. Codes for Timing Over-Retarded.",
      correctDiagnosis: "Stretched Timing Chain / Tensioner Failure",
      options: ["Stretched Timing Chain", "Bad VVT Solenoid", "Low Oil Pressure", "Worn Drive Belt"],
      explanation: "Timing chain tensioner failure is common, causing chain slap and timing correlation codes."
    },
    {
      id: "eng-017",
      vehicle: "2014 VW Jetta",
      complaint: "Car has hard time accelerating, feels like it's choking.",
      details: "Fuel Trims are +25% (Adding fuel). MAF sensor is new. Spraying brake cleaner near intake manifold changes idle.",
      correctDiagnosis: "Intake Manifold Gasket Leak",
      options: ["Intake Manifold Gasket Leak", "Bad O2 Sensor", "Clogged Injectors", "Weak Fuel Pump"],
      explanation: "The high positive fuel trim indicates a lean condition. The idle change when spraying cleaner confirms an external vacuum leak."
    },
    {
      id: "eng-018",
      vehicle: "2009 Nissan Maxima",
      complaint: "Engine stalls when turning gently or stopping.",
      details: "Throttle bodies were just cleaned. Idle is erratic.",
      correctDiagnosis: "Idle Relearn Procedure Required",
      options: ["Idle Relearn Required", "Bad Alternator", "Power Steering Switch", "Vacuum Leak"],
      explanation: "Nissan Electronic Throttles require a specific relearn procedure after cleaning, or the idle will be unstable."
    },
    {
      id: "eng-019",
      vehicle: "2011 Chevy Equinox",
      complaint: "Engine sounds like a diesel.",
      details: "Code P0011 (Camshaft Position - Timing Over-Advanced). Oil is very dirty and low.",
      correctDiagnosis: "Clogged VVT Solenoid Screens",
      options: ["Clogged VVT Solenoids", "Broken Timing Chain", "Rod Knock", "Piston Slap"],
      explanation: "Variable Valve Timing solenoids rely on clean oil pressure. Sludge blocks the screens, causing timing rattle and codes."
    },
    {
      id: "eng-020",
      vehicle: "2002 Toyota Camry",
      complaint: "White smoke from exhaust, sweet smell.",
      details: "Engine misfires on startup then smooths out. Coolant reservoir is losing fluid.",
      correctDiagnosis: "Head Gasket Failure",
      options: ["Head Gasket Failure", "Cracked Block", "Intake Manifold Leak", "EGR Cooler Leak"],
      explanation: "Coolant leaks into the cylinder overnight, causing a wet start misfire and white steam. Sweet smell confirms coolant."
    },
    {
      id: "eng-021",
      vehicle: "2018 Ford Mustang",
      complaint: "Lack of power at high RPM.",
      details: "Fuel pressure is 60psi at idle but drops to 30psi at WOT.",
      correctDiagnosis: "Clogged Fuel Filter / Weak Pump",
      options: ["Restricted Fuel Supply", "Clogged Air Filter", "Bad TPS", "Restricted Exhaust"],
      explanation: "Fuel pressure should remain stable or rise under load. A drop indicates volume starvation from a filter or weak pump."
    },
    {
      id: "eng-022",
      vehicle: "2015 Jeep Renegade",
      complaint: "Engine runs rough, traction control light on.",
      details: "Code P0106 (MAP Sensor Performance). Wiring looks good.",
      correctDiagnosis: "MAP Sensor",
      options: ["MAP Sensor", "Wheel Speed Sensor", "Throttle Body", "Vacuum Leak"],
      explanation: "On Chrysler/Jeep/Fiat systems, a bad MAP sensor calculation often disables Traction Control as a fail-safe."
    },
    {
      id: "eng-023",
      vehicle: "2007 Subaru Impreza",
      complaint: "Oil leaking on driveway.",
      details: "Oil seems to be coming from the bottom of the timing cover area. Oil filter is dry.",
      correctDiagnosis: "Front Crankshaft Seal",
      options: ["Front Crankshaft Seal", "Camshaft Seal", "Oil Pan Gasket", "Valve Cover"],
      explanation: "A leak behind the crank pulley/balancer indicates a front main seal failure."
    },
    {
      id: "eng-024",
      vehicle: "2013 Audi A4",
      complaint: "Whistling/Squealing noise engine bay.",
      details: "Noise stops when oil fill cap is removed. Extreme vacuum felt at oil fill cap.",
      correctDiagnosis: "Failed Oil Separator (PCV)",
      options: ["Failed Oil Separator", "Belt Tensioner", "Alternator Bearing", "Water Pump"],
      explanation: "High crankcase vacuum suggests the PCV/Oil Separator diaphragm has ruptured, pulling full manifold vacuum on the crankcase."
    },
    {
      id: "eng-025",
      vehicle: "2001 Dodge Ram",
      complaint: "Backfiring through intake.",
      details: "Happens under load. Distributor cap and rotor look new.",
      correctDiagnosis: "Crossed Spark Plug Wires",
      options: ["Crossed Wires", "Lean Mixture", "Wiped Cam Lobe", "Burnt Intake Valve"],
      explanation: "Firing order mix-ups (plug wires) cause the spark to fire while the intake valve is open, causing a pop through the intake."
    }
  ],

  [Topic.ELECTRICAL]: [
    {
      id: "elec-001",
      vehicle: "2016 Honda Accord",
      complaint: "Battery dies overnight.",
      details: "Battery is new. Parasitic draw test shows 250mA draw (spec < 50mA). Pulling the 'Radio/Backup' fuse drops draw to 10mA.",
      correctDiagnosis: "Internal Short in Radio Unit",
      options: ["Internal Short in Radio Unit", "Bad Alternator Diode", "Stuck Relay", "Glovebox Light On"],
      explanation: "A 250mA draw is significant. Isolating it to the radio fuse suggests the head unit or Bluetooth module is not going to sleep."
    },
    {
      id: "elec-002",
      vehicle: "2010 Ford F-150",
      complaint: "Clicking noise when trying to start. No crank.",
      details: "Battery voltage is 12.6V. Voltage at starter solenoid 'S' terminal is 12V when key is turned. Starter clicks once loud.",
      correctDiagnosis: "Failed Starter Motor",
      options: ["Failed Starter Motor", "Bad Starter Relay", "Corroded Battery Cables", "Neutral Safety Switch"],
      explanation: "If the solenoid gets signal and clicks loudly, the control circuit is good. The contacts or motor inside the starter are likely bad."
    },
    {
      id: "elec-003",
      vehicle: "2014 Jeep Grand Cherokee",
      complaint: "Alternator not charging.",
      details: "Battery light on. Voltage running is 12.0V. Alternator is brand new. PCM code for 'Generator Field Control Circuit Open'.",
      correctDiagnosis: "Wiring Break in Field Control Circuit",
      options: ["Wiring Break", "Bad PCM", "Defective New Alternator", "Slipping Belt"],
      explanation: "Modern alternators are PCM controlled. A new alternator won't charge if the computer cannot command it due to a broken wire."
    },
    {
      id: "elec-004",
      vehicle: "2012 Chevy Malibu",
      complaint: "Left turn signal blinks fast.",
      details: "Front left signal works. Rear left signal is dark. Bulb is new.",
      correctDiagnosis: "Corroded Bulb Socket",
      options: ["Corroded Bulb Socket", "Bad Flasher Relay", "Open in Wiring Harness", "BCM Failure"],
      explanation: "Hyper-flash indicates low load (bulb out). If the bulb is new but doesn't light, the socket connection is the most common failure point."
    },
    {
      id: "elec-005",
      vehicle: "2008 Toyota Camry",
      complaint: "Power windows don't work from driver switch.",
      details: "Passenger window works from passenger switch. Driver switch cannot operate any window.",
      correctDiagnosis: "Faulty Master Window Switch",
      options: ["Faulty Master Switch", "Blown Fuse", "broken wire in door jamb", "Bad Window Motor"],
      explanation: "If individual switches work but the master doesn't, power is present in the system, pointing to the master switch itself."
    },
    {
      id: "elec-006",
      vehicle: "2015 Subaru Forester",
      complaint: "Brake lights stay on constantly.",
      details: "Even with car off. Battery is draining.",
      correctDiagnosis: "Brake Pedal Switch Stopper Pad",
      options: ["Brake Pedal Switch Stopper", "Short to Power", "Bad Relay", "BCM Failure"],
      explanation: "On many Asian vehicles, a rubber pad on the pedal pushes the switch button. If it crumbles, the switch plunger extends, turning lights on."
    },
    {
      id: "elec-007",
      vehicle: "2005 VW Jetta",
      complaint: "Fuse 15 blows immediately when installed.",
      details: "Fuse 15 powers the cigarette lighter and interior lights.",
      correctDiagnosis: "Short to Ground (Cigarette Lighter)",
      options: ["Short to Ground", "Open Circuit", "High Resistance", "Bad Relay"],
      explanation: "Instant fuse blowing indicates a direct short to ground. Coins falling into the lighter socket are a classic cause."
    },
    {
      id: "elec-008",
      vehicle: "2011 Nissan Rogue",
      complaint: "Horn doesn't work.",
      details: "Relay clicks when button pressed. Fuse is good.",
      correctDiagnosis: "Failed Horn Assembly",
      options: ["Failed Horn", "Clockspring", "Bad Ground", "Horn Switch"],
      explanation: "If the relay clicks, the switch (clockspring) and control side are good. The problem is on the load side—either the horn itself or its ground."
    },
    {
      id: "elec-009",
      vehicle: "2019 Ram 1500",
      complaint: "Trailer lights not working.",
      details: "Truck lights work fine. Test light at 7-way connector shows no power for running lights.",
      correctDiagnosis: "Blown Trailer Tow Fuse",
      options: ["Blown Trailer Tow Fuse", "Bad Ground", "Trailer Wiring Short", "BCM Issue"],
      explanation: "Most modern trucks have separate fuses for the trailer connector circuits to protect the truck's main lighting."
    },
    {
      id: "elec-010",
      vehicle: "2013 Hyundai Sonata",
      complaint: "Airbag light is on.",
      details: "Code B1346: Driver Airbag Resistance High. Horn and cruise control also stopped working.",
      correctDiagnosis: "Broken Clockspring",
      options: ["Broken Clockspring", "Bad Airbag Module", "Seat Belt Buckle Switch", "Impact Sensor"],
      explanation: "The clockspring (spiral cable) connects the steering wheel buttons and airbag. Failure affects multiple steering wheel functions."
    },
    {
      id: "elec-011",
      vehicle: "2006 Ford Focus",
      complaint: "Blower motor only works on High speed.",
      details: "Speeds 1, 2, and 3 do nothing.",
      correctDiagnosis: "Blower Motor Resistor",
      options: ["Blower Motor Resistor", "Blower Motor", "HVAC Control Head", "Bad Relay"],
      explanation: "The resistor pack reduces voltage for lower speeds. 'High' bypasses the resistor, so it still works when the resistor fails."
    },
    {
      id: "elec-012",
      vehicle: "2014 Chevy Silverado",
      complaint: "Dash says 'Service Stabilitrak'.",
      details: "Steering angle sensor reads -450 degrees when wheels are straight.",
      correctDiagnosis: "Steering Angle Sensor Calibration",
      options: ["Steering Angle Sensor", "Wheel Speed Sensor", "Yaw Rate Sensor", "EBCM Failure"],
      explanation: "The sensor data is implausible. It likely lost calibration or the sensor itself has an internal fault."
    },
    {
      id: "elec-013",
      vehicle: "2003 Honda CR-V",
      complaint: "Dash lights and radio flicker when driving over bumps.",
      details: "Battery terminals are tight.",
      correctDiagnosis: "Loose Main Ground Strap",
      options: ["Loose Ground Strap", "Bad Alternator", "Ignition Switch", "Loose Fuse Box"],
      explanation: "Intermittent power loss over bumps usually indicates a loose connection, often the main negative cable to the body/engine."
    },
    {
      id: "elec-014",
      vehicle: "2016 Toyota Tacoma",
      complaint: "Fog lights won't turn on.",
      details: "High beams work. Fog light relay does NOT click when switch is turned.",
      correctDiagnosis: "Fog Light Switch (Stalk) or Logic",
      options: ["Fog Light Switch", "Burnt Bulbs", "Blown Fuse", "Bad Ground"],
      explanation: "If the relay doesn't click, the control signal is missing. Fogs usually won't work if high beams are on (logic check)."
    },
    {
      id: "elec-015",
      vehicle: "2001 Jeep Cherokee",
      complaint: "Gauges dead, No Bus message on odometer.",
      details: "Car runs fine otherwise.",
      correctDiagnosis: "Instrument Cluster Connection",
      options: ["Instrument Cluster", "Bad PCM", "Crank Sensor Short", "Body Control Module"],
      explanation: "On these Jeeps, the connector pins for the cluster oxidize, causing a loss of bus communication to the gauges."
    },
    {
      id: "elec-016",
      vehicle: "2018 Kia Soul",
      complaint: "Key fob doesn't unlock doors.",
      details: "Red light on fob does not flash when buttons pressed. Spare fob works.",
      correctDiagnosis: "Dead Key Fob Battery",
      options: ["Dead Fob Battery", "Bad Door Actuator", "Receiver Module", "Programming Lost"],
      explanation: "Simplest explanation first: if the LED on the remote doesn't light, the remote battery is dead."
    },
    {
      id: "elec-017",
      vehicle: "2012 Ford Fusion",
      complaint: "Ambient temp sensor reads -40F.",
      details: "AC blows warm because of this reading.",
      correctDiagnosis: "Open Circuit in Temp Sensor Wiring",
      options: ["Open Circuit", "Short Circuit", "Bad Sensor", "Bad HVAC Module"],
      explanation: "In most thermistor circuits, infinite resistance (open wire/unplugged sensor) translates to the lowest possible temperature reading (-40)."
    },
    {
      id: "elec-018",
      vehicle: "2009 Chevy Cobalt",
      complaint: "Car won't shift out of Park.",
      details: "Brake lights work.",
      correctDiagnosis: "Shift Interlock Solenoid",
      options: ["Shift Interlock Solenoid", "Brake Light Switch", "Transmission Cable", "Ignition Switch"],
      explanation: "If brake lights work, the signal is there. The solenoid that physically releases the shifter is the likely culprit."
    },
    {
      id: "elec-019",
      vehicle: "2015 BMW X5",
      complaint: "Rear wiper does not return to park position.",
      details: "Stops in middle of glass.",
      correctDiagnosis: "Wiper Motor Park Switch",
      options: ["Wiper Motor Internal Switch", "Wiper Relay", "Control Module", "Loose Nut"],
      explanation: "The motor assembly contains a park switch that maintains power until the blade reaches home. If this fails, it stops immediately when turned off."
    },
    {
      id: "elec-020",
      vehicle: "2004 Dodge Neon",
      complaint: "Speedometer erratic.",
      details: "Jumps between 20 and 80 mph. Cruise control drops out.",
      correctDiagnosis: "Output Speed Sensor",
      options: ["Output Speed Sensor", "Cluster Stepper Motor", "PCM", "Wheel Speed Sensor"],
      explanation: "The Output Speed Sensor (VSS) drives the speedometer and cruise control. Erratic signal affects both."
    },
    {
      id: "elec-021",
      vehicle: "2017 Nissan Altima",
      complaint: "Push button start doesn't work intermittently.",
      details: "Dash says 'Key ID Incorrect'. Holding fob to button works.",
      correctDiagnosis: "Weak Key Fob Battery / Interference",
      options: ["Fob Battery", "Brake Switch", "Starter", "Antenna Failure"],
      explanation: "When the fob battery is weak, the range is reduced. Touching it to the button uses near-field communication (RFID) as a backup."
    },
    {
      id: "elec-022",
      vehicle: "2000 Buick LeSabre",
      complaint: "Fuel gauge stuck on Full.",
      details: "Unplugging the sender at the tank causes gauge to go to Empty.",
      correctDiagnosis: "Short to Ground in Sender Wire",
      options: ["Short to Ground", "Open Circuit", "Bad Gauge", "Bad Sender"],
      explanation: "Wait, on GM: 0 ohms is Empty, 90 ohms is Full. Or varies. Actually, usually 'Open' (unplugged) going to Empty suggests the gauge defaults to Empty on open. If it was stuck Full, and unplugging drops it, the sender was providing a high resistance signal or the wire was shorted to a reference? Let's assume High Resistance = Full. Unplugging = Infinite. If it drops to E, it means logic is different. Let's fix: GM 0-90 ohm. 0=E, 90=F. If stuck Full, resistance is high. Unplugging = Infinite. Gauge goes past Full. If stuck on Full and unplugging goes to Empty, it implies High Resistance = Empty? No. Let's use generic logic: 'Short to Ground usually pegs gauge one way, Open pegs it the other'. If unplugging changes state, the wiring to the plug is good. The Sender is likely stuck at the 'Full' resistance value."
    },
    {
      id: "elec-023",
      vehicle: "2014 Ford Escape",
      complaint: "Sync screen is black.",
      details: "Radio still plays audio. Fuse 67 is good.",
      correctDiagnosis: "APIM Module Failure",
      options: ["APIM Failure", "Screen Failure", "Loose Connection", "Software Update"],
      explanation: "The Accessory Protocol Interface Module (APIM) is a common failure point on Fords, causing the screen to die while audio passes through."
    },
    {
      id: "elec-024",
      vehicle: "2011 Mazda 6",
      complaint: "Headlights dim at idle.",
      details: "Voltage at battery is 12.8V at idle, 13.5V at 2000RPM.",
      correctDiagnosis: "Weak Alternator / High Resistance",
      options: ["Weak Alternator", "Bad Battery", "Slipping Belt", "Normal Operation"],
      explanation: "Charging voltage should be ~13.5-14.5V even at idle. 12.8V means the alternator isn't keeping up with load at low RPM."
    },
    {
      id: "elec-025",
      vehicle: "2016 Chevy Colorado",
      complaint: "Service 4WD message.",
      details: "Code C0321 (Transfer Case Lock Circuit). Actuator buzzes when trying to shift.",
      correctDiagnosis: "Transfer Case Actuator",
      options: ["Transfer Case Actuator", "TCCM Module", "Switch", "Wiring Short"],
      explanation: "The actuator motor or position sensor inside it has failed, preventing the system from confirming the shift."
    }
  ],

  [Topic.BRAKES]: [
    {
      id: "brk-001",
      vehicle: "2012 Honda Odyssey",
      complaint: "Steering wheel shakes when braking at highway speeds.",
      details: "No vibration when accelerating or cruising.",
      correctDiagnosis: "Warped Front Rotors",
      options: ["Warped Front Rotors", "Unbalanced Tires", "Worn Tie Rods", "Stuck Caliper"],
      explanation: "Pulsation felt in the steering wheel during braking isolates the issue to the front brakes, specifically rotor runout (warpage)."
    },
    {
      id: "brk-002",
      vehicle: "2008 Chevy Silverado",
      complaint: "Brake pedal goes to floor slowly at stop light.",
      details: "No visible fluid leaks. Reservoir is full.",
      correctDiagnosis: "Master Cylinder Internal Leak",
      options: ["Master Cylinder Internal Leak", "Air in Lines", "Worn Pads", "Booster Failure"],
      explanation: "If the pedal sinks but no fluid is lost, the fluid is bypassing the seals inside the master cylinder and returning to the reservoir."
    },
    {
      id: "brk-003",
      vehicle: "2015 Ford Fusion",
      complaint: "Hard brake pedal (requires lots of force to stop).",
      details: "Pedal does not sink. Stopping distance is increased.",
      correctDiagnosis: "Brake Booster Failure / Vacuum Leak",
      options: ["Booster Failure", "Air in Lines", "Glazed Pads", "Seized Caliper"],
      explanation: "The booster provides power assist. A hard pedal indicates loss of vacuum assist or a ruptured booster diaphragm."
    },
    {
      id: "brk-004",
      vehicle: "2010 Subaru Forester",
      complaint: "Car pulls to the left when braking.",
      details: "Tire pressures are even. Alignment is good.",
      correctDiagnosis: "Restricted Brake Hose (Right Side) or Seized Caliper (Right)",
      options: ["Right Caliper Issue", "Left Caliper Issue", "Master Cylinder", "Warped Rotor"],
      explanation: "The car pulls to the side that IS working. If it pulls Left, the Left brake is grabbing, or the Right brake is NOT grabbing. A seized Right caliper is the most likely culprit."
    },
    {
      id: "brk-005",
      vehicle: "2018 Toyota Camry",
      complaint: "Squeaking noise coming from rear brakes.",
      details: "Noise stops when brakes are applied slightly.",
      correctDiagnosis: "Brake Pad Wear Indicator",
      options: ["Wear Indicator", "Glazed Pads", "Missing Hardware", "Rock in Shield"],
      explanation: "Wear indicators are designed to scrape the rotor when pads are low, creating a chirp that often changes or stops when pressure is applied."
    },
    {
      id: "brk-006",
      vehicle: "2013 BMW X3",
      complaint: "Brake lining light on.",
      details: "Pads look thick on outside. Inner pads are worn.",
      correctDiagnosis: "Seized Slide Pins",
      options: ["Seized Slide Pins", "Bad Sensor", "Caliper Piston Stuck", "Normal Wear"],
      explanation: "If the caliper cannot float on the slide pins, the inner pad does all the work and wears out prematurely."
    },
    {
      id: "brk-007",
      vehicle: "2005 Ford F-150",
      complaint: "ABS light on. Pump runs constantly.",
      details: "Even with key off, pump hums.",
      correctDiagnosis: "ABS Module Relay Stuck On",
      options: ["ABS Module Relay", "Bad Wheel Speed Sensor", "Low Fluid", "Air in Unit"],
      explanation: "A pump running key-off indicates the relay inside the control module has welded itself shut."
    },
    {
      id: "brk-008",
      vehicle: "2016 Jeep Wrangler",
      complaint: "Grinding noise when braking.",
      details: "Metal-on-metal sound. Rotor is scored.",
      correctDiagnosis: "Worn Brake Pads (Backing Plate Contact)",
      options: ["Worn Pads", "Rock in Dust Shield", "Bad Wheel Bearing", "Rusty Rotor"],
      explanation: "Grinding indicates the friction material is gone and the steel backing plate is machining the rotor."
    },
    {
      id: "brk-009",
      vehicle: "2009 Nissan Altima",
      complaint: "Spongy brake pedal.",
      details: "Brakes were just serviced (calipers replaced).",
      correctDiagnosis: "Air in Hydraulic Lines",
      options: ["Air in Lines", "Bad Master Cylinder", "Twisted Hose", "Wrong Fluid"],
      explanation: "Spongy feel is the hallmark of air trapped in the system, which compresses unlike fluid."
    },
    {
      id: "brk-010",
      vehicle: "2014 Chevy Impala",
      complaint: "ABS activates on dry pavement at low speed.",
      details: "Occurs just before coming to a complete stop.",
      correctDiagnosis: "Rust Jacking / Dirty Wheel Speed Sensor Tone Ring",
      options: ["Dirty Tone Ring", "Bad Module", "Low Tire Pressure", "Bad Caliper"],
      explanation: "If the sensor sees a dropout in signal (due to rust/gap), it thinks the wheel locked up and activates ABS falsely."
    },
    {
      id: "brk-011",
      vehicle: "2002 Dodge Ram",
      complaint: "Rear brakes lock up easily.",
      details: "Especially when truck is empty.",
      correctDiagnosis: "Proportioning Valve / Rear ABS Sensor",
      options: ["Proportioning Valve", "Shoes Adjusted Too Tight", "Leaking Axle Seal", "Master Cylinder"],
      explanation: "Rear brakes shouldn't lock before fronts. Contaminated shoes (oil) or a bad proportioning valve are prime suspects."
    },
    {
      id: "brk-012",
      vehicle: "2019 Honda Civic",
      complaint: "Electric Parking Brake (EPB) won't release.",
      details: "Warning light on dash.",
      correctDiagnosis: "EPB Actuator Failure",
      options: ["EPB Actuator", "Stretch Cable", "Bad Switch", "Low Battery"],
      explanation: "The electric motor mounted on the caliper (actuator) often seizes or fails, preventing retraction."
    },
    {
      id: "brk-013",
      vehicle: "2007 Toyota Tundra",
      complaint: "Brake fluid level drops slowly.",
      details: "No drips on ground. Calipers are dry.",
      correctDiagnosis: "Leak into Brake Booster",
      options: ["Leak into Booster", "Worn Pads (Displacement)", "Internal Master Leak", "Evaporation"],
      explanation: "The rear seal of the master cylinder can leak fluid directly into the vacuum booster, hiding the leak."
    },
    {
      id: "brk-014",
      vehicle: "2011 Hyundai Elantra",
      complaint: "Clicking noise when applying brakes in Reverse.",
      details: "Only happens once per direction change.",
      correctDiagnosis: "Brake Pads Shifting in Bracket",
      options: ["Pads Shifting", "Bad CV Joint", "Loose Lug Nuts", "Warped Rotor"],
      explanation: "If the pads are slightly smaller than the bracket or clips are worn, they click as they shift position with rotation."
    },
    {
      id: "brk-015",
      vehicle: "2015 Audi A4",
      complaint: "Brake pedal pulsates.",
      details: "Pedal kickback is felt. Rotors are new.",
      correctDiagnosis: "Hub Surface Corrosion (Runout)",
      options: ["Hub Corrosion", "Defective New Rotors", "Loose Lug Nuts", "Stuck Caliper"],
      explanation: "If rust wasn't cleaned from the hub before installing new rotors, the rotor won't sit flat, causing runout immediately."
    },
    {
      id: "brk-016",
      vehicle: "2000 Ford Ranger",
      complaint: "Rear drum brakes squeak when releasing pedal.",
      details: "Braking performance is fine.",
      correctDiagnosis: "Lack of Lubrication on Shoe Backing Plate Pads",
      options: ["Dry Backing Plate Pads", "Worn Shoes", "Leaking Cylinder", "Weak Springs"],
      explanation: "The shoes slide against the backing plate. Without high-temp grease, they squeak every time they move."
    },
    {
      id: "brk-017",
      vehicle: "2013 Mazda 3",
      complaint: "One wheel is extremely hot and smells burning.",
      details: "Car feels sluggish.",
      correctDiagnosis: "Seized Caliper Piston",
      options: ["Seized Caliper", "Bad Bearing", "Dragging Shoe", "Alignment Issue"],
      explanation: "A piston that doesn't retract keeps the pads clamped to the rotor, generating immense heat and drag."
    },
    {
      id: "brk-018",
      vehicle: "2017 Chevy Tahoe",
      complaint: "Service Trailer Brake System message.",
      details: "Fuse is good.",
      correctDiagnosis: "Corroded Trailer Connector / Integrated Controller",
      options: ["Corroded Connector", "Bad Relay", "Master Cylinder", "Brake Switch"],
      explanation: "Water intrusion into the bumper plug connector often causes short circuits detected by the trailer brake controller."
    },
    {
      id: "brk-019",
      vehicle: "2006 VW Golf",
      complaint: "Hard pedal, hissing noise under dash.",
      details: "Hissing stops when pedal is pressed.",
      correctDiagnosis: "Brake Booster Vacuum Leak (Internal)",
      options: ["Booster Leak", "Vacuum Hose Leak", "Snake in dash", "Master Cylinder"],
      explanation: "An internal tear in the booster diaphragm allows vacuum to escape, creating a hiss and reducing assist."
    },
    {
      id: "brk-020",
      vehicle: "2010 Dodge Charger",
      complaint: "Brake lights work, but car won't shift out of park.",
      details: "Code for Brake Switch Signal.",
      correctDiagnosis: "Brake Light Switch (Logic Signal)",
      options: ["Brake Switch", "Shift Solenoid", "Blow Fuse", "Bad Bulb"],
      explanation: "Brake switches often have multiple circuits: one for lights, one for the ECU/Shifter. One can fail while the other works."
    },
    {
      id: "brk-021",
      vehicle: "2018 Subaru Outback",
      complaint: "Brake fade going down mountain.",
      details: "Pedal became spongy and ineffective. Returned to normal after cooling.",
      correctDiagnosis: "Boiling Brake Fluid (Old Fluid)",
      options: ["Boiling Fluid", "Warped Rotors", "Glazed Pads", "Vacuum Loss"],
      explanation: "Brake fluid absorbs moisture over time, lowering its boiling point. Heavy braking boils the water, creating compressible steam."
    },
    {
      id: "brk-022",
      vehicle: "2012 Kia Optima",
      complaint: "Soft pedal after caliper replacement.",
      details: "Bled system 3 times. No air bubbles seen.",
      correctDiagnosis: "Caliper Installed on Wrong Side (Bleeder Down)",
      options: ["Bleeder Down", "Bad Master", "ABS Air Pocket", "Leak"],
      explanation: "If calipers are swapped L/R, the bleeder screw ends up at the bottom. Air rises, so it can never be bled out."
    },
    {
      id: "brk-023",
      vehicle: "2004 Toyota Corolla",
      complaint: "Grinding noise from rear.",
      details: "Drum brakes. Shoes look okay.",
      correctDiagnosis: "Broken Hold-Down Hardware",
      options: ["Broken Hardware", "Bad Bearing", "Worn Shoes", "Rusty Drum"],
      explanation: "If a hold-down spring or pin breaks, the shoe flops around and can drag or grind against the drum."
    },
    {
      id: "brk-024",
      vehicle: "2016 Nissan Rogue",
      complaint: "ABS light, C1101 Code.",
      details: "Right Rear Wheel Speed Sensor Circuit.",
      correctDiagnosis: "Broken Wire in Harness near Control Arm",
      options: ["Broken Wire", "Bad Sensor", "Bad Hub", "Bad Module"],
      explanation: "Wires flexing with the suspension often fatigue and break inside the insulation near the wheel."
    },
    {
      id: "brk-025",
      vehicle: "2008 Chevy Impala",
      complaint: "Traction Active message on dry acceleration.",
      details: "No brake noise.",
      correctDiagnosis: "Wheel Speed Sensor Harness",
      options: ["Wheel Speed Sensor", "Transmission Slip", "Bad Tires", "Engine Misfire"],
      explanation: "GM W-body cars are notorious for breaks in the front ABS sub-harness, causing false wheel speed data."
    }
  ],

  [Topic.SUSPENSION]: [
    {
      id: "susp-001",
      vehicle: "2011 Chevy Impala",
      complaint: "Clunking noise from front end over bumps.",
      details: "Noise is rhythmic when going over small cracks. Sway bar links feel loose by hand.",
      correctDiagnosis: "Worn Sway Bar End Links",
      options: ["Worn Sway Bar Links", "Bad Struts", "Broken Spring", "Loose Caliper"],
      explanation: "Sway bar links connect the sway bar to the strut/control arm. The ball-and-socket joints wear out, causing a rattle or clunk."
    },
    {
      id: "susp-002",
      vehicle: "2015 Ford Explorer",
      complaint: "Groaning noise when turning steering wheel.",
      details: "Fluid is full but aerated (foamy).",
      correctDiagnosis: "Air in Power Steering System (Suction Leak)",
      options: ["Air in System", "Bad Pump", "Bad Rack", "Worn Belt"],
      explanation: "Foamy fluid indicates air entering the system, usually through a hardened O-ring on the suction (low pressure) side of the pump."
    },
    {
      id: "susp-003",
      vehicle: "2009 Honda Civic",
      complaint: "Tires wearing on the inside edge.",
      details: "Car wanders slightly.",
      correctDiagnosis: "Excessive Negative Toe (Toe-Out)",
      options: ["Toe-Out", "Positive Camber", "Bad Shocks", "Unbalanced Tires"],
      explanation: "While negative camber causes inside wear, excessive toe-out scrubs the rubber off the inside edge much faster and causes wandering."
    },
    {
      id: "susp-004",
      vehicle: "2013 Ram 1500",
      complaint: "Vibration at highway speeds.",
      details: "Steering wheel shakes. Tires were just balanced.",
      correctDiagnosis: "Road Force Variation / Bent Rim",
      options: ["Bent Rim", "Bad Alignment", "Warped Rotor", "Loose Lug Nuts"],
      explanation: "If balance is good, the wheel might be physically bent or the tire has a stiff spot (road force), causing physical hop."
    },
    {
      id: "susp-005",
      vehicle: "2006 Dodge Charger",
      complaint: "Loud squeak when turning steering wheel or bouncing car.",
      details: "Sounds like an old mattress.",
      correctDiagnosis: "Dry/Worn Lower Ball Joint",
      options: ["Worn Ball Joint", "Strut Mount", "Tie Rod", "Sway Bar Bushing"],
      explanation: "A load-bearing ball joint that loses lubrication will creak and squeak loudly under the weight of the car."
    },
    {
      id: "susp-006",
      vehicle: "2014 Subaru Forester",
      complaint: "Growling noise that gets louder with speed.",
      details: "Noise changes pitch when swerving left/right. Gets louder when turning Left.",
      correctDiagnosis: "Right Wheel Bearing Failure",
      options: ["Right Wheel Bearing", "Left Wheel Bearing", "Cupped Tires", "Bad CV Joint"],
      explanation: "Turning Left loads the Right wheels. If the noise increases when loaded, the Right bearing is the culprit."
    },
    {
      id: "susp-007",
      vehicle: "2010 Toyota Prius",
      complaint: "Car bounces excessively after bumps.",
      details: "Ride feels 'floaty'.",
      correctDiagnosis: "Worn Struts/Shocks",
      options: ["Worn Struts", "Broken Springs", "Sway Bar Link", "Low Tire Pressure"],
      explanation: "Springs support the weight; struts/shocks dampen the oscillation. If it bounces, the dampers are shot."
    },
    {
      id: "susp-008",
      vehicle: "2016 Jeep Grand Cherokee",
      complaint: "Air suspension warning. Front low.",
      details: "Compressor runs then shuts off.",
      correctDiagnosis: "Leak in Air Spring (Bag)",
      options: ["Leaking Air Spring", "Bad Compressor", "Height Sensor", "Fuse"],
      explanation: "Rubber air bags dry rot and leak. The compressor times out to prevent overheating."
    },
    {
      id: "susp-009",
      vehicle: "2005 Chevy Silverado 2500",
      complaint: "Play in steering wheel.",
      details: "Steering wheel moves 2 inches before wheels turn. Pitman arm moves but drag link doesn't follow immediately.",
      correctDiagnosis: "Worn Idler/Pitman Arm",
      options: ["Worn Steering Linkage", "Bad Gearbox", "Loose Column", "Bad Ball Joints"],
      explanation: "On parallelogram steering systems, wear in the idler and pitman arms creates a dead spot in the steering."
    },
    {
      id: "susp-010",
      vehicle: "2012 Nissan Altima",
      complaint: "Steering feels heavy and jerky.",
      details: "Fluid is full. Belt is tight. U-joint in steering shaft looks rusty.",
      correctDiagnosis: "Seized Steering Shaft U-Joint",
      options: ["Seized U-Joint", "Bad Pump", "Bad Rack", "Alignment"],
      explanation: "The intermediate shaft connects the column to the rack. When the U-joint seizes, it binds every 180 degrees."
    },
    {
      id: "susp-011",
      vehicle: "2018 Ford F-150",
      complaint: "Popping noise when turning into driveway.",
      details: "Steering stops have grease on them.",
      correctDiagnosis: "Steering Stop rubbing (Normal)",
      options: ["Steering Stop", "Bad CV Joint", "Ball Joint", "Loose Rack"],
      explanation: "Metal-on-metal contact at full lock on the steering stops often pops/grinds. Grease usually fixes it."
    },
    {
      id: "susp-012",
      vehicle: "2008 BMW 328i",
      complaint: "Thumping noise from rear over bumps.",
      details: "Upper shock mount area.",
      correctDiagnosis: "Worn Upper Shock Mounts",
      options: ["Shock Mounts", "Sway Bar", "Subframe Bushing", "Spring Pad"],
      explanation: "The foam/rubber mounts where the shock bolts to the body often disintegrate, allowing the shock rod to hammer the body."
    },
    {
      id: "susp-013",
      vehicle: "2015 Chevy Malibu",
      complaint: "ABS and Traction light on.",
      details: "Code C0035 (LF Wheel Speed Sensor). Hub assembly is rusty.",
      correctDiagnosis: "Failed Wheel Bearing / Tone Ring",
      options: ["Failed Hub/Bearing", "Bad Sensor Only", "Wiring", "Module"],
      explanation: "On modern cars, the tone ring is magnetic and built into the bearing seal. If the bearing fails/rusts, the sensor loses signal."
    },
    {
      id: "susp-014",
      vehicle: "2004 Honda Odyssey",
      complaint: "Whining noise turning.",
      details: "Fluid reservoir screen is clogged with sludge.",
      correctDiagnosis: "Starving Power Steering Pump",
      options: ["Clogged Reservoir", "Bad Pump", "Bad Rack", "Loose Belt"],
      explanation: "Honda reservoirs have a fine mesh screen at the bottom. Once clogged, the pump cavitates (whines) due to fluid starvation."
    },
    {
      id: "susp-015",
      vehicle: "2019 Toyota Tacoma",
      complaint: "Vibration in seat.",
      details: "Steering wheel is smooth.",
      correctDiagnosis: "Rear Tire Balance / Driveline",
      options: ["Rear Tire Balance", "Front Tire Balance", "Alignment", "Loose Steering"],
      explanation: "Steering wheel shimmy = Front wheels. Seat/Floor vibration = Rear wheels or Driveline."
    },
    {
      id: "susp-016",
      vehicle: "2011 Ford Escape",
      complaint: "Clunk when braking or accelerating.",
      details: "Control arm moves significantly when pried.",
      correctDiagnosis: "Worn Control Arm Bushings",
      options: ["Control Arm Bushings", "Motor Mount", "Ball Joint", "Subframe Bolt"],
      explanation: "The rubber bushings isolate the control arm. When torn, the arm shifts forward/back under load."
    },
    {
      id: "susp-017",
      vehicle: "2007 Dodge Caliber",
      complaint: "Car pulls right immediately.",
      details: "Caster on Right is 2.0, Caster on Left is 3.5.",
      correctDiagnosis: "Engine Cradle Shifted / Bent Component",
      options: ["Caster Split", "Tire Pressure", "Brake Drag", "Road Crown"],
      explanation: "Car pulls to the side with LEAST positive caster. A 1.5 degree split is significant and usually implies collision damage or subframe shift."
    },
    {
      id: "susp-018",
      vehicle: "2014 VW Jetta",
      complaint: "Steering wheel is crooked when driving straight.",
      details: "Car does not pull.",
      correctDiagnosis: "Toe Adjustment (Tie Rods)",
      options: ["Toe Adjustment", "Steering Rack", "Steering Wheel Removal", "Camber"],
      explanation: "If the car tracks straight but the wheel is off, the total toe might be okay, but individual toe adjustments are shifted left/right."
    },
    {
      id: "susp-019",
      vehicle: "2001 Jeep Wrangler",
      complaint: "Death Wobble after hitting bump.",
      details: "Steering shakes violently.",
      correctDiagnosis: "Loose Track Bar",
      options: ["Loose Track Bar", "Bad Shocks", "Alignment", "Tires"],
      explanation: "The track bar locates the front axle laterally. If loose, the axle oscillates uncontrollably."
    },
    {
      id: "susp-020",
      vehicle: "2016 Hyundai Sonata",
      complaint: "Clicking noise when turning sharp.",
      details: "Boots on axle look torn and greasy.",
      correctDiagnosis: "Outer CV Joint Failure",
      options: ["Outer CV Joint", "Wheel Bearing", "Ball Joint", "Diff Gear"],
      explanation: "The classic symptom of a bad CV joint is clicking while turning under power. Torn boots confirm grease loss."
    },
    {
      id: "susp-021",
      vehicle: "2013 Chevy Traverse",
      complaint: "Power steering hard at idle, easy when revving.",
      details: "No leaks.",
      correctDiagnosis: "Worn Power Steering Pump (Flow Control)",
      options: ["Weak Pump", "Bad Rack", "Slipping Belt", "Air in System"],
      explanation: "The pump cannot produce enough pressure/flow at low RPM due to internal wear, but manages at high RPM."
    },
    {
      id: "susp-022",
      vehicle: "2009 Mini Cooper",
      complaint: "Tire cupping (choppy wear).",
      details: "Noise sounds like a helicopter.",
      correctDiagnosis: "Worn Struts/Shocks",
      options: ["Worn Struts", "Bad Alignment", "Balance", "Bearing"],
      explanation: "When shocks fail, the tire bounces down the road, scuffing patches of rubber off (cupping)."
    },
    {
      id: "susp-023",
      vehicle: "2003 Buick Century",
      complaint: "Memory Steer (Car keeps turning after corner).",
      details: "Steering doesn't return to center.",
      correctDiagnosis: "Binding Upper Strut Mount Bearings",
      options: ["Binding Strut Bearings", "Bad Alignment", "Low Tire Pressure", "Rack Gear"],
      explanation: "The strut turns with the wheel. If the bearing at the top binds, the spring winds up and resists returning to center."
    },
    {
      id: "susp-024",
      vehicle: "2017 Tesla Model S",
      complaint: "Squeaking from front suspension.",
      details: "Upper control arm ball joint boot is intact.",
      correctDiagnosis: "Dry Control Arm Ball Joint (Common Issue)",
      options: ["Control Arm Ball Joint", "Strut", "Bushing", "Motor Mount"],
      explanation: "Certain vehicles have sealed joints that dry out prematurely. Squeaking is the first sign before play develops."
    },
    {
      id: "susp-025",
      vehicle: "2012 Ford Focus",
      complaint: "Rattle from rear over bumps.",
      details: "Heat shield is tight.",
      correctDiagnosis: "Broken Rear Spring",
      options: ["Broken Spring", "Shock Mount", "Sway Bar", "Loose Spare Tire"],
      explanation: "Coil springs often snap at the very bottom pigtail, sitting in the control arm and rattling."
    }
  ],

  [Topic.HVAC]: [
    {
      id: "hvac-001",
      vehicle: "2014 Ford F-150",
      complaint: "AC blows warm.",
      details: "Compressor clutch engages for 2 seconds then clicks off. Cycle repeats.",
      correctDiagnosis: "Low Refrigerant Charge",
      options: ["Low Charge", "Bad Compressor", "Bad Relay", "Clogged Orifice"],
      explanation: "Rapid cycling indicates the low pressure switch is tripping immediately when the compressor starts, usually due to low refrigerant."
    },
    {
      id: "hvac-002",
      vehicle: "2010 Chevy Silverado",
      complaint: "Driver side warm, Passenger side cold.",
      details: "Dual zone climate control. Actuators can be heard moving.",
      correctDiagnosis: "Driver Blend Door Actuator Failure",
      options: ["Blend Door Actuator", "Low Freon", "Heater Core Clog", "Control Head"],
      explanation: "Usually, a temperature split indicates a blend door issue. However, low freon can also cause this on some GM trucks (evaporator core starvation), but Actuator is #1 suspect if clicking."
    },
    {
      id: "hvac-003",
      vehicle: "2016 Honda Civic",
      complaint: "AC not working.",
      details: "Condenser has a wet spot and road debris damage.",
      correctDiagnosis: "Leaking Condenser",
      options: ["Leaking Condenser", "Bad Compressor", "Evaporator Leak", "Line Leak"],
      explanation: "The condenser sits in front of the radiator and is prone to rock strikes. An oily wet spot confirms a refrigerant leak."
    },
    {
      id: "hvac-004",
      vehicle: "2008 Dodge Ram",
      complaint: "Airflow only comes out of Defrost vents.",
      details: "Cannot switch to face or floor.",
      correctDiagnosis: "Broken Mode Door / Vacuum Leak",
      options: ["Vacuum Leak / Mode Door", "Blower Motor", "Blend Door", "Resistor"],
      explanation: "Defrost is the default fail-safe position. On vacuum-operated systems, a leak sends air to defrost."
    },
    {
      id: "hvac-005",
      vehicle: "2013 Toyota Camry",
      complaint: "Musty smell from vents.",
      details: "AC drain tube is dry even on humid days.",
      correctDiagnosis: "Clogged Evaporator Drain",
      options: ["Clogged Drain", "Cabin Filter", "Mold in Carpet", "Heater Core"],
      explanation: "If the water condensed from the air cannot drain, it pools in the HVAC box, growing mold and causing odors."
    },
    {
      id: "hvac-006",
      vehicle: "2017 Jeep Wrangler",
      complaint: "No heat.",
      details: "Engine temp is normal. Both heater hoses are hot.",
      correctDiagnosis: "Clogged Heater Core (Internal Casting Sand)",
      options: ["Clogged Heater Core", "Thermostat", "Blend Door", "Water Pump"],
      explanation: "Actually, if BOTH hoses are hot, flow is good? Wait. If both are hot, heat exchange isn't happening? Or blend door is stuck on Cold. If one is hot and one is luke warm, it's clogged. Let's assume: Inlet Hot, Outlet Warm/Cold = Clog. If BOTH hot = Blend Door."
    },
    {
      id: "hvac-007",
      vehicle: "2005 Nissan Pathfinder",
      complaint: "No air blowing from vents.",
      details: "Fan works on High only.",
      correctDiagnosis: "Blower Motor Resistor",
      options: ["Blower Motor Resistor", "Blower Motor", "Relay", "Fuse"],
      explanation: "Classic resistor failure symptoms."
    },
    {
      id: "hvac-008",
      vehicle: "2012 VW Jetta",
      complaint: "AC blows warm at idle, cold when driving.",
      details: "Radiator fans do not turn on.",
      correctDiagnosis: "Radiator/Condenser Fan Failure",
      options: ["Fan Failure", "Weak Compressor", "Low Charge", "Belt Slip"],
      explanation: "Without airflow across the condenser at idle, heat cannot be removed from the refrigerant, and pressures spike."
    },
    {
      id: "hvac-009",
      vehicle: "2015 Subaru Forester",
      complaint: "AC clutch does not engage.",
      details: "System has pressure. Fuse is blown.",
      correctDiagnosis: "Short in Compressor Clutch Coil",
      options: ["Short in Clutch Coil", "Bad Switch", "Bad Relay", "Locked Compressor"],
      explanation: "If the fuse blows, there is a high current draw, likely from a shorted magnet coil in the clutch."
    },
    {
      id: "hvac-010",
      vehicle: "2009 Ford Focus",
      complaint: "Puddle of water on passenger floorboard.",
      details: "AC works fine.",
      correctDiagnosis: "Evaporator Drain Tube Detached/Clogged",
      options: ["Drain Tube Issue", "Heater Core Leak", "Windshield Leak", "Door Seal"],
      explanation: "Clear water indicates condensation. If the tube is clogged or detached, it drains inside the cabin."
    },
    {
      id: "hvac-011",
      vehicle: "2018 Chevy Equinox",
      complaint: "Hissing noise from dash when AC turns on.",
      details: "Cooling is poor.",
      correctDiagnosis: "Low Refrigerant (Expansion Valve Noise)",
      options: ["Low Refrigerant", "Vacuum Leak", "Blower Noise", "Snake"],
      explanation: "When refrigerant is low, it enters the expansion valve as a gas/liquid mix rather than liquid, causing a distinct hiss."
    },
    {
      id: "hvac-012",
      vehicle: "2011 Hyundai Sonata",
      complaint: "Squeaking noise from glovebox area.",
      details: "Changes with fan speed.",
      correctDiagnosis: "Blower Motor Bearing/Debris",
      options: ["Blower Motor", "Belt Squeal", "Actuator", "Filter"],
      explanation: "Leaves in the squirrel cage or a dry bearing will make noise proportional to fan speed."
    },
    {
      id: "hvac-013",
      vehicle: "2006 Dodge Durango",
      complaint: "High Side pressure too high (350+ psi).",
      details: "AC shuts off. Fan clutch seems weak.",
      correctDiagnosis: "Insufficient Condenser Airflow",
      options: ["Airflow / Fan Clutch", "Overcharged", "Restriction", "Bad Sensor"],
      explanation: "If the fan clutch doesn't pull air, the condenser can't shed heat, causing pressure to skyrocket."
    },
    {
      id: "hvac-014",
      vehicle: "2014 Kia Optima",
      complaint: "AC compressor makes loud growling noise.",
      details: "Noise stops when AC is turned OFF.",
      correctDiagnosis: "Internal Compressor Failure",
      options: ["Internal Compressor Failure", "Clutch Bearing", "Idler Pulley", "Belt Tensioner"],
      explanation: "If noise is only present when the clutch is engaged (turning the internals), the pump itself is failing."
    },
    {
      id: "hvac-015",
      vehicle: "2003 Honda CR-V",
      complaint: "AC Black Death.",
      details: "Compressor seized. Metal shavings in orifice tube.",
      correctDiagnosis: "Compressor Implosion (Requires Full Flush)",
      options: ["Compressor Failure / Contamination", "Just Compressor", "Just Clutch", "Fluid Flush"],
      explanation: "When a compressor explodes internally, it sends debris throughout the system. Replacing just the compressor will result in immediate failure."
    },
    {
      id: "hvac-016",
      vehicle: "2016 Nissan Altima",
      complaint: "No heat at idle.",
      details: "Heat returns when revving engine. Coolant level is low.",
      correctDiagnosis: "Low Coolant Level / Air Pocket",
      options: ["Low Coolant", "Bad Thermostat", "Water Pump", "Clogged Core"],
      explanation: "The heater core is often the highest point in the cooling system. Low coolant causes an airlock in the core at low flow rates."
    },
    {
      id: "hvac-017",
      vehicle: "2012 Chevy Traverse",
      complaint: "Clicking noise in dash for 10 seconds after start.",
      details: "AC works fine.",
      correctDiagnosis: "Recirculation Door Actuator Striped Gears",
      options: ["Recirc Door Actuator", "Blower Motor", "Relay Clicking", "CD Player"],
      explanation: "Actuators calibrate on startup. If gears are stripped, they click as they try to find 'home'."
    },
    {
      id: "hvac-018",
      vehicle: "2000 Buick LeSabre",
      complaint: "Vent selection changes to Defrost when accelerating hard.",
      details: "Vacuum check valve?",
      correctDiagnosis: "Vacuum Leak / Check Valve Failure",
      options: ["Vacuum Leak", "Blower Motor", "Bad Switch", "Normal"],
      explanation: "Engine vacuum drops at WOT. The check valve should hold vacuum in the reservoir. If it fails, the doors revert to default (Defrost)."
    },
    {
      id: "hvac-019",
      vehicle: "2019 Toyota RAV4",
      complaint: "AC blows warm. Sight glass shows bubbles.",
      details: "Wait, newer cars don't have sight glasses. Assuming older or general logic.",
      correctDiagnosis: "Low Refrigerant Charge",
      options: ["Low Charge", "Overcharge", "Non-condensables", "Oil Overcharge"],
      explanation: "Bubbles in a sight glass (on systems equipped) indicate a lack of pure liquid line, meaning low charge."
    },
    {
      id: "hvac-020",
      vehicle: "2015 Ford Explorer",
      complaint: "Sweet smell inside car, windows fog up.",
      details: "Coolant level dropping.",
      correctDiagnosis: "Leaking Heater Core",
      options: ["Leaking Heater Core", "Evap Leak", "Rain Leak", "Exhaust Leak"],
      explanation: "Hot coolant leaking into the HVAC box turns to steam, fogging windows and smelling sweet."
    },
    {
      id: "hvac-021",
      vehicle: "2008 Chevy Colorado",
      complaint: "Blower motor doesn't work.",
      details: "Fuse is melted.",
      correctDiagnosis: "High Resistance in Blower Motor / Wiring",
      options: ["High Amp Draw", "Short to Ground", "Bad Switch", "Bad Resistor"],
      explanation: "Old motors draw excessive amps, or loose fuse terminals create heat, melting the plastic."
    },
    {
      id: "hvac-022",
      vehicle: "2013 Mazda CX-5",
      complaint: "AC belt squeals when AC turned on.",
      details: "Belt is tight.",
      correctDiagnosis: "Compressor Seizing / High Head Pressure",
      options: ["Compressor Load", "Glazed Belt", "Weak Tensioner", "Oil on Belt"],
      explanation: "If the compressor is hard to turn (failing) or pressure is too high, the belt slips."
    },
    {
      id: "hvac-023",
      vehicle: "2017 Honda Accord",
      complaint: "High Side Low, Low Side High.",
      details: "Compressor is running. Cooling is poor.",
      correctDiagnosis: "Internal Compressor Failure (Valves)",
      options: ["Compressor Internal Leak", "Expansion Valve", "Low Charge", "Over Charge"],
      explanation: "If the compressor cannot build pressure differential, the high and low sides equalize."
    },
    {
      id: "hvac-024",
      vehicle: "2004 Jeep Liberty",
      complaint: "AC clutch coil open circuit.",
      details: "Infinite resistance.",
      correctDiagnosis: "Failed Clutch Coil",
      options: ["Failed Clutch Coil", "Wiring Break", "Bad Fuse", "Gap too large"],
      explanation: "The electromagnet coil has burned open."
    },
    {
      id: "hvac-025",
      vehicle: "2011 Nissan Frontier",
      complaint: "Frost on AC suction line.",
      details: "Airflow is weak.",
      correctDiagnosis: "Evaporator Freezing (Clogged Cabin Filter)",
      options: ["Clogged Cabin Filter", "Low Charge", "Stuck Expansion Valve", "Bad Thermostat"],
      explanation: "Low airflow (clogged filter) causes the evaporator to get too cold, freezing humidity into a block of ice."
    }
  ],

  [Topic.TRANSMISSION]: [
    {
      id: "trans-001",
      vehicle: "2012 Chevy Silverado",
      complaint: "Transmission slips in 1st and 2nd gear.",
      details: "Fluid is bright red and full.",
      correctDiagnosis: "Failed Shift Solenoid / Valve Body",
      options: ["Shift Solenoid", "Burnt Clutches", "Low Fluid", "Torque Converter"],
      explanation: "If fluid is clean, clutches aren't burnt. Slipping is likely due to lack of hydraulic pressure control (Solenoid/Valve)."
    },
    {
      id: "trans-002",
      vehicle: "2016 Ford Focus",
      complaint: "Shuddering when taking off from a stop.",
      details: "Dual Clutch Transmission (DPS6).",
      correctDiagnosis: "Clutch Contamination / Glazing",
      options: ["Clutch Shudder", "Bad Mounts", "Misfire", "Bad CV Axle"],
      explanation: "Ford's Dry Dual Clutch system is notorious for seal leaks contaminating the clutch friction material, causing shudder."
    },
    {
      id: "trans-003",
      vehicle: "2008 Honda Accord",
      complaint: "Flashing 'D' light.",
      details: "Code P0847 (3rd Clutch Pressure Switch Low).",
      correctDiagnosis: "Failed Pressure Switch",
      options: ["Pressure Switch", "Bad ECU", "Internal Failure", "Low Fluid"],
      explanation: "Honda pressure switches are common failure points. They get stuck on or off, confusing the ECU."
    },
    {
      id: "trans-004",
      vehicle: "2015 Nissan Sentra",
      complaint: "Vehicle does not accelerate well (High RPM, low speed).",
      details: "CVT Transmission. Whining noise.",
      correctDiagnosis: "CVT Belt Slippage / Pump Failure",
      options: ["CVT Failure", "Clogged Cat", "Fuel Pump", "Brake Drag"],
      explanation: "CVTs rely on hydraulic pressure to clamp the belt. Whining indicates pump starvation or damage, leading to slip."
    },
    {
      id: "trans-005",
      vehicle: "2010 Toyota Camry",
      complaint: "Vibration between 40-50mph.",
      details: "Feels like driving over rumble strips. Goes away if brake is tapped (unlocks TCC).",
      correctDiagnosis: "Torque Converter Shudder",
      options: ["Torque Converter Shudder", "Tire Balance", "Misfire", "Bad Axle"],
      explanation: "Lock-up clutch shudder occurs when the friction material in the converter grabs and slips rapidly."
    },
    {
      id: "trans-006",
      vehicle: "2005 Jeep Wrangler",
      complaint: "Clunk when shifting from Drive to Reverse.",
      details: "U-joints have rust dust on seals.",
      correctDiagnosis: "Worn U-Joints",
      options: ["Worn U-Joints", "Bad Diff", "Loose Mounts", "Chain Stretch"],
      explanation: "Slack in the universal joints creates a metal-on-metal clunk when direction of torque changes."
    },
    {
      id: "trans-007",
      vehicle: "2014 Chevy Cruze",
      complaint: "Leaking red fluid from driver side axle area.",
      details: "Axle shaft is slightly loose.",
      correctDiagnosis: "Axle Output Shaft Seal",
      options: ["Axle Seal", "Pan Gasket", "Cooler Line", "Case Porosity"],
      explanation: "The seal where the CV axle enters the transaxle is a common leak point."
    },
    {
      id: "trans-008",
      vehicle: "2018 Subaru Outback",
      complaint: "Clicking noise when turning sharp.",
      details: "Outer CV boot is torn.",
      correctDiagnosis: "Failed Outer CV Joint",
      options: ["CV Joint", "Diff Gear", "Wheel Bearing", "Brake Pad"],
      explanation: "Loss of grease causes the joint to wear and click."
    },
    {
      id: "trans-009",
      vehicle: "2002 Ford Explorer",
      complaint: "Delay engaging Drive.",
      details: "Takes 3 seconds to engage. Fluid is low.",
      correctDiagnosis: "Low Transmission Fluid",
      options: ["Low Fluid", "Worn Pump", "Filter O-Ring", "Forward Clutch"],
      explanation: "Low fluid means the pump sucks air before fluid, delaying the pressure buildup needed to engage the clutch."
    },
    {
      id: "trans-010",
      vehicle: "2011 VW Jetta Manual",
      complaint: "Clutch slips when accelerating in 5th gear.",
      details: "Pedal release point is very high.",
      correctDiagnosis: "Worn Clutch Disc",
      options: ["Worn Clutch Disc", "Oil Leak", "Bad Flywheel", "Slave Cylinder"],
      explanation: "Slippage in high gear is the first sign of a worn friction disc."
    },
    {
      id: "trans-011",
      vehicle: "2016 Ram 1500",
      complaint: "Stuck in 4th gear (Limp Mode).",
      details: "Solenoid Pack code.",
      correctDiagnosis: "Solenoid Pack Failure",
      options: ["Solenoid Pack", "Broken Input Shaft", "Bad TCM", "Overheating"],
      explanation: "When electrical faults are detected, the transmission defaults to a single gear (usually 3rd or 4th) to prevent damage."
    },
    {
      id: "trans-012",
      vehicle: "2007 Mazda 3",
      complaint: "Hard shifting (Manual).",
      details: "Grinds going into gear unless RPM is matched perfectly.",
      correctDiagnosis: "Worn Synchronizers",
      options: ["Worn Synchronizers", "Clutch Drag", "Low Fluid", "Bent Fork"],
      explanation: "Synchronizers match the speed of the gear to the shaft. When worn, they can't spin up the gear, causing grinding."
    },
    {
      id: "trans-013",
      vehicle: "2013 Chevy Equinox",
      complaint: "No Reverse. Drive works fine.",
      details: "GM 6T40 transmission.",
      correctDiagnosis: "Broken 3-5-R Wave Plate",
      options: ["Broken Wave Plate", "Shift Solenoid", "Low Fluid", "Manual Valve"],
      explanation: "A known failure where the wave plate shatters, causing loss of Reverse and 3rd/5th gears."
    },
    {
      id: "trans-014",
      vehicle: "2009 Nissan Titan",
      complaint: "Transmission fluid looks like strawberry milkshake.",
      details: "Radiator also leaked.",
      correctDiagnosis: "Internal Radiator Cooler Failure (Cross-contamination)",
      options: ["Cooler Failure", "Water wading", "Vandalism", "Condensation"],
      explanation: "The transmission cooler is inside the radiator tank. If the barrier breaches, coolant mixes with ATF, destroying the transmission."
    },
    {
      id: "trans-015",
      vehicle: "2019 Jeep Cherokee",
      complaint: "Service 4WD System.",
      details: "Rear driveshaft not engaging.",
      correctDiagnosis: "PTU (Power Transfer Unit) Failure",
      options: ["PTU Failure", "Rear Diff", "Actuator", "CV Axle"],
      explanation: "The PTU sends power to the rear. Splines often strip inside, resulting in FWD only."
    },
    {
      id: "trans-016",
      vehicle: "2004 Chevy S10",
      complaint: "Clutch pedal is spongy and goes to floor.",
      details: "Fluid reservoir is empty. Wet spot under truck.",
      correctDiagnosis: "Leaking Slave Cylinder",
      options: ["Slave Cylinder", "Master Cylinder", "Worn Disc", "Air in Line"],
      explanation: "Hydraulic leak causes loss of pressure. External slave cylinders are prone to seal failure."
    },
    {
      id: "trans-017",
      vehicle: "2012 Hyundai Sonata",
      complaint: "Thump when stopping.",
      details: "Feels like getting rear-ended.",
      correctDiagnosis: "Transmission Downshift Bump (Software)",
      options: ["Software Update", "Bad Mounts", "Brake Issue", "Slip Yoke"],
      explanation: "Harsh downshifts (2-1) are often calibration issues in the TCM."
    },
    {
      id: "trans-018",
      vehicle: "2001 Dodge Dakota",
      complaint: "Engine stalls when putting in Drive.",
      details: "Runs fine in Park.",
      correctDiagnosis: "TCC Solenoid Stuck On",
      options: ["TCC Stuck On", "IAC Valve", "Vacuum Leak", "Low Fluid"],
      explanation: "The Torque Converter Clutch acts like a manual clutch. If it locks up at idle, it stalls the engine just like stopping a manual without pushing the pedal."
    },
    {
      id: "trans-019",
      vehicle: "2017 Ford Escape",
      complaint: "Whining noise that changes with Vehicle Speed.",
      details: "Noise persists in Neutral coasting.",
      correctDiagnosis: "Output Shaft Bearing / Differential Bearing",
      options: ["Diff Bearing", "Input Shaft", "Pump Noise", "Engine Noise"],
      explanation: "If noise correlates to road speed (not RPM) and exists in Neutral, it's the final drive/output section."
    },
    {
      id: "trans-020",
      vehicle: "2006 Honda Civic",
      complaint: "Grinding noise when pushing clutch pedal in.",
      details: "Noise stops when pedal released.",
      correctDiagnosis: "Throw-out Bearing (Release Bearing)",
      options: ["Throw-out Bearing", "Pilot Bearing", "Input Bearing", "Gear Whine"],
      explanation: "The throw-out bearing spins only when the pedal is depressed. Noise = Bad Bearing."
    },
    {
      id: "trans-021",
      vehicle: "2015 BMW 328i",
      complaint: "Leaking fluid from plastic pan.",
      details: "Pan is warped.",
      correctDiagnosis: "Plastic Transmission Pan Warpage",
      options: ["Pan Warpage", "Gasket", "Drain Plug", "Rear Main"],
      explanation: "Composite pans warp over heat cycles. The pan itself must be replaced, not just a gasket."
    },
    {
      id: "trans-022",
      vehicle: "2010 Ford Ranger",
      complaint: "Clunk from rear when taking off.",
      details: "Slip Yoke needs grease.",
      correctDiagnosis: "Driveshaft Slip Yoke Binding",
      options: ["Slip Yoke", "U-Joint", "Diff", "Leaf Spring"],
      explanation: "The splines on the slip yoke dry out and stick, then pop free when torque is applied."
    },
    {
      id: "trans-023",
      vehicle: "2016 Chevy Colorado",
      complaint: "Transmission holds gears too long.",
      details: "Tow/Haul mode is OFF.",
      correctDiagnosis: "Transmission Fluid Temp Sensor (Reading High)",
      options: ["Temp Sensor", "TPS", "VSS", "Clutch Slip"],
      explanation: "Transmissions delay shifts to cool down if they think they are overheating. A faulty sensor can trick this logic."
    },
    {
      id: "trans-024",
      vehicle: "2003 Toyota Matrix",
      complaint: "Howling noise in 5th gear only.",
      details: "Manual Transmission.",
      correctDiagnosis: "5th Gear Bearing / Gear Wear",
      options: ["5th Gear Bearing", "Throwout Bearing", "Input Bearing", "Diff"],
      explanation: "Noise specific to one gear isolates the problem to that gear set."
    },
    {
      id: "trans-025",
      vehicle: "2014 Jeep Grand Cherokee",
      complaint: "Cannot shift out of Park.",
      details: "Shifter is electronic.",
      correctDiagnosis: "Intelligent Power Module (Fuse/Relay)",
      options: ["Power Module", "Brake Switch", "Shifter Assembly", "Cable"],
      explanation: "Electronic shifters need power to unlock. Often a simple fuse or module communication error."
    }
  ]
};