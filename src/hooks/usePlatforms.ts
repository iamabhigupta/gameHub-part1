import platforms from '../data/platforms';

// interface Platform {
//   id: string;
//   name: string;
//   slug: string;
// }

const usePlatform = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatform;
