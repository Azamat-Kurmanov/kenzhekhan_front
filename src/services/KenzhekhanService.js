const KENZHEKHAN_API_BASE_URL = 'http://localhost:12001/kenzhekhan-market-core'

class KenzhekhanService{
    getMainLink(){
        return KENZHEKHAN_API_BASE_URL;
    }
}

export default new KenzhekhanService()