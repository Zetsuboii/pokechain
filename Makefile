REACH = reach

.PHONY: clean
clean:
	rm -rf build/*.main.mjs

build/%.main.mjs: %.rsh
	$(REACH) compile $^ main

.PHONY: build
build: build/index.main.mjs
	docker build -f Dockerfile --tag=reachsh/reach-app-pokechain:latest .

.PHONY: run
run:
	$(REACH) run index

.PHONY: run-target
run-target: build
	docker-compose -f "docker-compose.yml" run --rm reach-app-pokechain-$${REACH_CONNECTOR_MODE} $(ARGS)

.PHONY: down
down:
	docker-compose -f "docker-compose.yml" down --remove-orphans

.PHONY: run-live
run-live:
	docker-compose run --rm reach-app-tut-7-ETH-live

.PHONY: run-observer
run-observer:
	docker-compose run --rm observer

.PHONY: run-player
run-player:
	docker-compose run --rm player
