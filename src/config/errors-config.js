import glass from '@/assets/images/glass.png';
import saucer from '@/assets/images/saucer.png'

export const errorsConfig = {
    searchError: {
        image: glass,
        title: 'Мы никого не нашли',
        subtitle: 'Попробуй скорректировать запрос',
        buttonTitle: null
    },
    criticalError: {
        image: saucer,
        title: 'Какой-то сверхразум все сломал',
        subtitle: 'Постараемся быстро починить',
        buttonTitle: 'Попробовать снова'
    }
};