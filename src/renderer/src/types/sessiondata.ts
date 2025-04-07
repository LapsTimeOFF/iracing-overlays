/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SessionData {
  timestamp: string;
  data: Data;
}

export interface Data {
  WeekendInfo: WeekendInfo;
  SessionInfo: SessionInfo;
  CameraInfo: CameraInfo;
  RadioInfo: RadioInfo;
  DriverInfo: DriverInfo;
  SplitTimeInfo: SplitTimeInfo;
}

export interface WeekendInfo {
  TrackName: string;
  TrackID: number;
  TrackLength: string;
  TrackLengthOfficial: string;
  TrackDisplayName: string;
  TrackDisplayShortName: string;
  TrackConfigName: string;
  TrackCity: string;
  TrackCountry: string;
  TrackAltitude: string;
  TrackLatitude: string;
  TrackLongitude: string;
  TrackNorthOffset: string;
  TrackNumTurns: number;
  TrackPitSpeedLimit: string;
  TrackType: string;
  TrackDirection: string;
  TrackWeatherType: string;
  TrackSkies: string;
  TrackSurfaceTemp: string;
  TrackAirTemp: string;
  TrackAirPressure: string;
  TrackWindVel: string;
  TrackWindDir: string;
  TrackRelativeHumidity: string;
  TrackFogLevel: string;
  TrackPrecipitation: string;
  TrackCleanup: number;
  TrackDynamicTrack: number;
  TrackVersion: any;
  SeriesID: number;
  SeasonID: number;
  SessionID: number;
  SubSessionID: number;
  LeagueID: number;
  Official: number;
  RaceWeek: number;
  EventType: string;
  Category: string;
  SimMode: string;
  TeamRacing: number;
  MinDrivers: number;
  MaxDrivers: number;
  DCRuleSet: string;
  QualifierMustStartRace: number;
  NumCarClasses: number;
  NumCarTypes: number;
  HeatRacing: number;
  BuildType: string;
  BuildTarget: string;
  BuildVersion: any;
  RaceFarm: string;
  WeekendOptions: WeekendOptions;
  TelemetryOptions: TelemetryOptions;
}

export interface WeekendOptions {
  NumStarters: number;
  StartingGrid: string;
  QualifyScoring: string;
  CourseCautions: string;
  StandingStart: number;
  ShortParadeLap: number;
  Restarts: string;
  WeatherType: string;
  Skies: string;
  WindDirection: string;
  WindSpeed: string;
  WeatherTemp: string;
  RelativeHumidity: string;
  FogLevel: string;
  TimeOfDay: string;
  Date: string;
  EarthRotationSpeedupFactor: number;
  Unofficial: number;
  CommercialMode: string;
  NightMode: string;
  IsFixedSetup: number;
  StrictLapsChecking: string;
  HasOpenRegistration: number;
  HardcoreLevel: number;
  NumJokerLaps: number;
  IncidentLimit: number;
  FastRepairsLimit: number;
  GreenWhiteCheckeredLimit: number;
}

export interface TelemetryOptions {
  TelemetryDiskFile: string;
}

export interface SessionInfo {
  CurrentSessionNum: number;
  Sessions: Session[];
}

export interface Session {
  SessionNum: number;
  SessionLaps: any;
  SessionTime: string;
  SessionNumLapsToAvg: number;
  SessionType: string;
  SessionTrackRubberState: string;
  SessionName: string;
  SessionSubType: any;
  SessionSkipped: number;
  SessionRunGroupsUsed: number;
  SessionEnforceTireCompoundChange: number;
  ResultsPositions: ResultsPosition[];
  ResultsFastestLap: ResultsFastestLap[];
  ResultsAverageLapTime: number;
  ResultsNumCautionFlags: number;
  ResultsNumCautionLaps: number;
  ResultsNumLeadChanges: number;
  ResultsLapsComplete: number;
  ResultsOfficial: number;
}

export interface ResultsPosition {
  Position: number;
  ClassPosition: number;
  CarIdx: number;
  Lap: number;
  Time: number;
  FastestLap: number;
  FastestTime: number;
  LastTime: number;
  LapsLed: number;
  LapsComplete: number;
  JokerLapsComplete: number;
  LapsDriven: number;
  Incidents: number;
  ReasonOutId: number;
  ReasonOutStr: string;
}

export interface ResultsFastestLap {
  CarIdx: number;
  FastestLap: number;
  FastestTime: number;
}

export interface CameraInfo {
  Groups: Group[];
}

export interface Group {
  GroupNum: number;
  GroupName: string;
  Cameras: Camera[];
  IsScenic?: boolean;
}

export interface Camera {
  CameraNum: number;
  CameraName: string;
}

export interface RadioInfo {
  SelectedRadioNum: number;
  Radios: Radio[];
}

export interface Radio {
  RadioNum: number;
  HopCount: number;
  NumFrequencies: number;
  TunedToFrequencyNum: number;
  ScanningIsOn: number;
  Frequencies: any;
}

export interface DriverInfo {
  DriverCarIdx: number;
  DriverUserID: number;
  PaceCarIdx: number;
  DriverHeadPosX: number;
  DriverHeadPosY: number;
  DriverHeadPosZ: number;
  DriverCarIsElectric: number;
  DriverCarIdleRPM: number;
  DriverCarRedLine: number;
  DriverCarEngCylinderCount: number;
  DriverCarFuelKgPerLtr: number;
  DriverCarFuelMaxLtr: number;
  DriverCarMaxFuelPct: number;
  DriverCarGearNumForward: number;
  DriverCarGearNeutral: number;
  DriverCarGearReverse: number;
  DriverCarSLFirstRPM: number;
  DriverCarSLShiftRPM: number;
  DriverCarSLLastRPM: number;
  DriverCarSLBlinkRPM: number;
  DriverCarVersion: any;
  DriverPitTrkPct: number;
  DriverCarEstLapTime: number;
  DriverSetupName: string;
  DriverSetupIsModified: number;
  DriverSetupLoadTypeName: string;
  DriverSetupPassedTech: number;
  DriverIncidentCount: number;
  DriverBrakeCurvingFactor: number;
  Drivers: Driver[];
}

export interface Driver {
  CarIdx: number;
  UserName: string;
  AbbrevName?: string;
  Initials?: string;
  UserID: number;
  TeamID: number;
  TeamName: string;
  CarNumber: string;
  CarNumberRaw: number;
  CarPath: string;
  CarClassID: number;
  CarID: number;
  CarIsPaceCar: number;
  CarIsAI: number;
  CarIsElectric: number;
  CarScreenName: string;
  CarScreenNameShort: string;
  CarClassShortName: any;
  CarClassRelSpeed: number;
  CarClassLicenseLevel: number;
  CarClassMaxFuelPct: string;
  CarClassWeightPenalty: string;
  CarClassPowerAdjust: string;
  CarClassDryTireSetLimit: string;
  CarClassColor: number;
  CarClassEstLapTime: number;
  IRating: number;
  LicLevel: number;
  LicSubLevel: number;
  LicString: string;
  LicColor: number;
  IsSpectator: number;
  CarDesignStr: string;
  HelmetDesignStr: string;
  SuitDesignStr: string;
  BodyType: number;
  FaceType: number;
  HelmetType: number;
  CarNumberDesignStr: string;
  CarSponsor_1: number;
  CarSponsor_2: number;
  CurDriverIncidentCount: number;
  TeamIncidentCount: number;
}

export interface SplitTimeInfo {
  Sectors: Sector[];
}

export interface Sector {
  SectorNum: number;
  SectorStartPct: number;
}
