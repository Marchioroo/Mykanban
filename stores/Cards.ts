import { defineStore } from "pinia";
import type { Column, Task } from "~/types/columnInterface";

export const useCardStore = defineStore("card", {
  state: () => ({
    columns: [] as Column[],
    taskSelected: undefined as Task | undefined,
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
              description:
                "Instalar dependências, configurar Docker e rodar projeto local.",
              date: "2025-06-01",
              tags: [
                { title: "Setup", color: "#4CAF50" },
                { title: "Designe", color: "#4CAF50" },
              ],
              users: 1,
            },
            {
              id: 2,
              title: "Pesquisar melhores práticas de segurança",
              description:
                "Levantamento de tópicos sobre criptografia e autenticação.",
              date: "2025-06-02",
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
              id: 3,
              title: "Desenvolver API RESTful para sistema interno",
              description:
                "Criar endpoints para usuários, autenticação e permissões.",
              date: "2025-06-05",
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
              id: 4,
              title: "Revisar código da nova feature de login",
              description: "Verificar padrões de código e boas práticas.",
              date: "2025-06-07",
              tags: [{ title: "Code Review", color: "#FF9800" }],
              users: 1,
            },
            {
              id: 5,
              title: "Testar integração com banco de dados",
              description:
                "Executar testes de leitura e escrita em ambiente de teste.",
              date: "2025-06-08",
              tags: [{ title: "Testes", color: "#3F51B5" }],
              users: 1,
            },
            {
              id: 6,
              title: "Implementar autenticação JWT",
              description:
                "Adicionar JWT ao fluxo de login e proteger rotas privadas.",
              date: "2025-06-09",
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
              id: 7,
              title: "Deploy da aplicação para ambiente de produção",
              description:
                "Subir build final no servidor com configurações de produção.",
              date: "2025-05-28",
              tags: [{ title: "Deploy", color: "#009688" }],
              users: 2,
            },
            {
              id: 8,
              title: "Configuração do CI/CD automatizado",
              description:
                "Pipeline com GitHub Actions para testes e deploy automático.",
              date: "2025-05-29",
              tags: [{ title: "DevOps", color: "#673AB7" }],
              users: 2,
            },
          ],
        },
      ];

      return this.columns;
    },
    async findCardSelected(id: number) {
      this.taskSelected = this.columns
        .flatMap((column) => column.tasks)
        .find((task) => task.id === id);
      console.log("task", this.taskSelected);
    },
  },
});
