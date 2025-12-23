import { formatDistanceToNow } from 'date-fns';
import { ms, enUS } from 'date-fns/locale'; // Import needed locales
import { useTranslation } from 'react-i18next';

const TimeStamps = ({ date }) => {
    const { i18n } = useTranslation();

    // Map i18next language codes to date-fns locales
    const localeMap = {
        ms: ms,
        en: enUS
    };

    const timeLabel = formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: localeMap[i18n.language] || enUS
    });

    return <span>{timeLabel}</span>;
};

export default TimeStamps;