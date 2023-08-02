import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';

const formatted = (d: Date) => {
    return formatDistanceToNow(new Date(d), { addSuffix: true, locale: pl });
};
export { formatted };