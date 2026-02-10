export interface Driver {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

export interface Constructor {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

export interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    FirstPractice?: { date: string; time: string };
    SecondPractice?: { date: string; time: string };
    ThirdPractice?: { date: string; time: string };
    Qualifying?: { date: string; time: string };
    Sprint?: { date: string; time: string };
}

export interface Standing {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
}

export interface ConstructorStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: Constructor;
}
