module.exports = {
  apps : [{
    name: 'chat',
    script: 'bin/www',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '256M',
  }]
};
