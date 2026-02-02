import {createSystem, defaultConfig} from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                brand: {
                    50: {
                        value: "#e3f2ff"
                    },
                    500: {
                        value: "#3182ce"
                    },
                    600: 
                    {
                        value: "#2c5282"
                    },
                }
            },
            fonts: {
                heading: {
                    value: "system-ui, sans-serif"
                },
                body: {
                    value: "system-ui, sans-serif"
                },
            }
        }
    }
});

export default system;