COMPOSE_DEV_FILE := docker/docker-compose.dev.yml
COMPOSE_PROD_FILE := docker/docker-compose.prod.yml

start-dev:
	@echo "Démarrage de l'environnement de dev."
	docker compose -f $(COMPOSE_DEV_FILE) up --build -d

start-prod:
	@echo "Démarrage de l'environnement de prod."
	docker compose -f $(COMPOSE_PROD_FILE) up --build -d

stop-dev:
	@echo "Arrêt de l'environnement de dev."
	docker compose -f $(COMPOSE_DEV_FILE) down

stop-prod:
	@echo "Arrêt de l'environnement de prod."
	docker compose -f $(COMPOSE_PROD_FILE) down

