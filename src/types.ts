export type categoria =
  "π Mercado" | "π Comida" | "π Vestuario" | "β¨ Lazer" | "π  Casa" | "π©Έ Saude" |
  "π Besteira" | "π» EletrΓ΄nicos" | "π Livro" | "πΈ Emprestimos" | "π Transporte";

export const CATEGORIAS_COMPRA:Array<categoria> =[
  "π Mercado", "π Comida", "π Vestuario", "β¨ Lazer", "π  Casa", "π©Έ Saude",
"π Besteira", "π» EletrΓ΄nicos", "π Livro", "πΈ Emprestimos", "π Transporte"
]

export interface pagamento {

}
export interface compra {
  who?: string
  value?: string | number
  time?: Date
  category?: categoria
}



// export interface pagamento {
//   id: number,
//   value: number,
//   when: Date,
//   description?: string,
//   type?: string
// }

// export interface compra {
//   id: number,
//   who: string,
//   where: string,
//   category: categoria,
//   pagamento: pagamento,
//   description?: string,
//   type?: string
// }

// export interface conta {
//   id: string,
//   name: string,
//   vencimento: Date,
//   tipo?: 'mensal' | 'diario' | 'anual',
//   pagementos: pagamento[],
//   description?: string,
//   type?: string
// }
