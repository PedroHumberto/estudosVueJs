import {http2} from './config'

export default {
	busca: (cep) => { return http2.get(cep + '/json') }
}