import WeatherDisplay from './index';
import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import getWeather from '../../services/api/getWeather';

jest.mock('../../services/api/getWeather', () => {
    return jest.fn(() => ({
        data: {
            location: {
                name: 'Hoxxes IV',
                region: 'Crystalline Caverns',
                country: 'Salt Pits',
            },
            current: {
                temp_c: 12,
                wind_kph: 34,
                pressure_mb: 56,
                condition: {
                    text: 'Partly cloudy',
                    icon: 'icon.png',
                },
            },
        },
    }));
})

const renderWeatherDisplay = () => {
    const queryClient = new QueryClient();
    return render(
        <QueryClientProvider client={queryClient}>
            <WeatherDisplay location='Hoxxes'/>
        </QueryClientProvider>
    );
};

describe('WeatherDisplay', () => {
    it('should render all data', async () => {
        renderWeatherDisplay();
        await waitFor(() => 
            expect(screen.getByText(/Hoxxes IV/)).toBeInTheDocument()
        );
        expect(screen.getByText(/Crystalline Caverns/)).toBeInTheDocument();
        expect(screen.getByText(/Salt Pits/)).toBeInTheDocument();
        expect(screen.getByText(/12/)).toBeInTheDocument();
        expect(screen.getByText(/34/)).toBeInTheDocument();
        expect(screen.getByText(/56/)).toBeInTheDocument();
        expect(screen.getByText(/Partly cloudy/)).toBeInTheDocument();
    });
    it('should handle loading state', async () => {
        renderWeatherDisplay();
        expect(screen.getByText(/Loading/)).toBeInTheDocument()
    });
});