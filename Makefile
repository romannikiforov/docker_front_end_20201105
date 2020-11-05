up:
	docker-compose up -d
	docker-compose ps

upbuild: 
	docker-compose up  -d --build
	docker-compose ps
	
rebuild:
	docker-compose down --remove-orphans
	docker-compose up  -d --build
	docker-compose ps

ps: 
	docker-compose ps

down:
	docker-compose down --remove-orphans

restart:
	docker-compose down --remove-orphans
	docker-compose up -d
	docker-compose ps

cli:
	docker exec -ti backend sh

db:
	docker exec -ti db bash

frontend:
	docker exec -ti frontend sh

netstat:
	netstat -plntu

memory-usage:
	docker ps -q | xargs  docker stats --no-stream	

