export interface Weather {

    location: {
        city : string,
        country : string,
        region : string
    },

    wind: {
        chill: string,
        direction: string,
        speed: string
    },

    atmosphere: {
        humidity : string,
        pressure : string,
        rising : string,
        visibility : string
    },

    item: { 

        condition: {
            date: string,
            temp: string,
            text: string
        },

        forecast: Array <{
            date: string,
            day: string,
            high: string,
            low: string,
            text: string
        }>  
            

    }

}

