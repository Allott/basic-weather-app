export type LocationType = {
    name: string;
    region: string;
    country: string;
};

export type CurrentType = {
    condition: {
        text: string;
        icon: string;
    },
    temp_c: number;
    wind_kph: number;
    pressure_mb: number;
};

export type WeatherType = {
    location: LocationType,
    current: CurrentType
};