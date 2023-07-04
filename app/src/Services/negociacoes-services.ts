import { NegociacoesDoDia } from "../Interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesService{

    public obterNegociacoes(): Promise<Negociacao[]>{

        return fetch("http://localhost:8080/dados")
       .then(res => res.json())
       .then((dados:NegociacoesDoDia[]) => {
            return dados.map(dadosDeHoje => {
                return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante)
            })
       })
    }
}