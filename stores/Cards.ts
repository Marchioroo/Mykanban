import { defineStore } from "pinia";
import type { Column } from "~/types/columnInterface";

export const useCardStore = defineStore("card", {
  state: () => ({
    columns: [] as Column[],
  }),
  actions: {
    async fetchCards() {
      this.columns = [
        {
          id: 1,
          name: "A fazer",
          colorDots: "#123F84",
          tasks: [
            {
              id: 1,
              title: "Configurar ambiente de desenvolvimento",
              tags: [
                { title: "Setup", color: "#4CAF50" },
                { title: "Designe", color: "#4CAF50" },
              ],
              users: 1,
            },
            {
              id: 2,
              title: "Pesquisar melhores práticas de segurança",
              tags: [{ title: "Segurança", color: "#F44336" }],
              users: 2,
            },
          ],
        },
        {
          id: 2,
          name: "Em Progresso",
          colorDots: "#B7135C",
          tasks: [
            {
              id: 1,
              title: "Desenvolver API RESTful para sistema interno",
              tags: [
                { title: "Backend", color: "#2196F3" },
                { title: "API", color: "#9C27B0" },
              ],
              users: 3,
            },
          ],
        },
        {
          id: 3,
          name: "Em análise",
          colorDots: "#D6A439",
          tasks: [
            {
              id: 1,
              title: "Revisar código da nova feature de login",
              tags: [{ title: "Code Review", color: "#FF9800" }],
              users: 1,
            },
            {
              id: 2,
              title: "Testar integração com banco de dados",
              tags: [{ title: "Testes", color: "#3F51B5" }],
              users: 1,
            },
            {
              id: 3,
              title: "Implementar autenticação JWT",
              tags: [
                { title: "Segurança", color: "#F44336" },
                { title: "Q&A", color: "#4CAF50" },
              ],
              users: 2,
            },
          ],
        },
        {
          id: 4,
          name: "Concluído",
          colorDots: "#1A5D0A",
          tasks: [
            {
              id: 1,
              title: "Deploy da aplicação para ambiente de produção",
              tags: [{ title: "Deploy", color: "#009688" }],
              users: 2,
            },
            {
              id: 2,
              title: "Configuração do CI/CD automatizado",
              tags: [{ title: "DevOps", color: "#673AB7" }],
              users: 2,
            },
          ],
        },
      ];

      return this.columns;
    },
  },
});
