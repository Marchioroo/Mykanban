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
                { title: "Design", color: "#FF9800" },
              ],
              users: 1,
              comments: [
                {
                  id: 1,
                  user: { name: "João Silva", photo: "/img/ImageDefault.png" },
                  text: "Já configurei o ambiente e está rodando.",
                  time: "2d",
                },
              ],
            },
            {
              id: 2,
              title: "Pesquisar melhores práticas de segurança",
              description:
                "Levantamento de tópicos sobre criptografia e autenticação.",
              date: "2025-06-02",
              tags: [{ title: "Segurança", color: "#F44336" }],
              users: 2,
              comments: [
                {
                  id: 1,
                  user: { name: "Ana Costa", photo: "/img/ImageDefault.png" },
                  text: "Encontrei um artigo ótimo sobre autenticação JWT.",
                  time: "1d",
                },
                {
                  id: 2,
                  user: { name: "João Silva", photo: "/img/ImageDefault.png" },
                  text: "Já configurei o ambiente e está rodando.",
                  time: "2d",
                },
              ],
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
              comments: [
                {
                  id: 1,
                  user: {
                    name: "Carlos Mendes",
                    photo: "/img/ImageDefault.png",
                  },
                  text: "Endpoints de login e registro finalizados.",
                  time: "3d",
                },
              ],
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
              comments: [
                {
                  id: 1,
                  user: {
                    name: "Marina Souza",
                    photo: "/img/ImageDefault.png",
                  },
                  text: "O código está claro e bem estruturado!",
                  time: "1d",
                },
              ],
            },
            {
              id: 5,
              title: "Testar integração com banco de dados",
              description:
                "Executar testes de leitura e escrita em ambiente de teste.",
              date: "2025-06-08",
              tags: [{ title: "Testes", color: "#3F51B5" }],
              users: 1,
              comments: [
                {
                  id: 1,
                  user: { name: "Pedro Lima", photo: "/img/ImageDefault.png" },
                  text: "Testes automatizados finalizados com sucesso.",
                  time: "2d",
                },
              ],
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
              comments: [
                {
                  id: 1,
                  user: {
                    name: "Lucas Fernandes",
                    photo: "/img/ImageDefault.png",
                  },
                  text: "A autenticação está funcionando corretamente no ambiente de testes.",
                  time: "3d",
                },
                {
                  id: 2,
                  user: {
                    name: "Fernanda Alves",
                    photo: "/img/ImageDefault.png",
                  },
                  text: "Deploy concluído com sucesso!",
                  time: "4d",
                },
              ],
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
              comments: [
                {
                  id: 1,
                  user: {
                    name: "Fernanda Alves",
                    photo: "/img/ImageDefault.png",
                  },
                  text: "Deploy concluído com sucesso!",
                  time: "4d",
                },
                {
                  id: 2,
                  user: {
                    name: "Lucas Fernandes",
                    photo: "/img/ImageDefault.png",
                  },
                  text: "A autenticação está funcionando corretamente no ambiente de testes.",
                  time: "3d",
                },
              ],
            },
            {
              id: 8,
              title: "Configuração do CI/CD automatizado",
              description:
                "Pipeline com GitHub Actions para testes e deploy automático.",
              date: "2025-05-29",
              tags: [{ title: "DevOps", color: "#673AB7" }],
              users: 2,
              comments: [
                {
                  id: 1,
                  user: {
                    name: "Rafael Souza",
                    photo: "/img/ImageDefault.png",
                  },
                  text: "Pipeline está rodando e passando todos os testes.",
                  time: "2d",
                },
                {
                  id: 2,
                  user: {
                    name: "Lucas Fernandes",
                    photo: "/img/ImageDefault.png",
                  },
                  text: "A autenticação está funcionando corretamente no ambiente de testes.",
                  time: "3d",
                },
              ],
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
    },

    async updateTask(taskSelected: Task) {
      this.columns.forEach((column) => {
        column.tasks.forEach((task) => {
          if (task.id === taskSelected.id) {
            task.title = taskSelected.title;
            task.description = taskSelected.description;
            task.date = taskSelected.date;
            task.tags = taskSelected.tags;
          }
        });
      });
    },
    async createTask() {},
  },
});
