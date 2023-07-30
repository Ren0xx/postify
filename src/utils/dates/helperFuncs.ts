import { formatDistanceToNow } from 'date-fns';

const formatted = (d: Date) => {
    return formatDistanceToNow(new Date(d), { addSuffix: true });
};
export { formatted };