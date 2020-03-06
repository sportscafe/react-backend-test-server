import data from './data';

export const home = () => {
    
    return {

        user_name   : data.getRandom("user_names"),
        banners     : data.get("banners"),
        sports      : data.get("sports"),
        challenges  : data.get("challenges")

    }
}