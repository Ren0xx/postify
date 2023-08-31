import { Card, Typography, Skeleton } from "@mui/material";
const RoomCardSkeleton = () => {
    return (
        <Card sx={{ minHeight: 120 }}>
            <Typography variant='h2'>
                <Skeleton />
            </Typography>
            <Typography variant='h4'>
                <Skeleton />
            </Typography>
        </Card>
    );
};

export default RoomCardSkeleton;
