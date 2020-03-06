import data from './data';

export const home = () => {
    
    return {

        user_name   : data.getRandom("user_names"),
        banners     : data.get("banners"),
        sports      : data.get("sports"),
        challenges  : data.get("challenges")

    }
};

export const wallet = () => {

    return {

        wallet_balance  : data.getRandom("wallet_balances"),
        transactions    : data.getRandomList("transactions"),
        withdrawals     : data.getRandomList("withdrawals")
    }

};

export const contests = () => {

    return {
        contests : data.getRandomList("contests")        
    }
};