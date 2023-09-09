import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const RealtimeDisplay: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [videoKey, setVideoKey] = useState<"small" | "large">("large");

    useEffect(() => {
        if (isSmallScreen) {
            setVideoKey("small");
        } else {
            setVideoKey("large");
        }
    }, [isSmallScreen]);

    return (
        <section>
            <Typography variant='h4' textAlign={"center"} mb={4}>
                Odkryj efektywność czatu w czasie rzeczywistym!
            </Typography>
            <video autoPlay loop key={videoKey} width='100%'>
                {videoKey === "small" && (
                    <source
                        src='/assets/videos/realtimeChat-Mobile.mp4'
                        type='video/mp4'
                    />
                )}
                {videoKey === "large" && (
                    <source
                        src='/assets/videos/realtimeChat-1600-550.mp4'
                        type='video/mp4'
                    />
                )}
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default RealtimeDisplay;
