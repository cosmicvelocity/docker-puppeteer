# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/xenial64"
    config.vm.hostname = "puppeteer-dev"
    # config.vm.box_check_update = false

    # config.vm.network :forwarded_port, guest: 80, host: 8080, host_ip: "127.0.0.1"
    # config.vm.network "private_network", ip: "192.168.33.10"
    # config.vm.network "public_network"

    config.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.memory = "2048"
    end

    config.vm.provision "shell", privileged: false, inline: <<-EOT
        # Update
        sudo apt-get update
        sudo apt-get dist-upgrade -y

        # Set locale
        sudo timedatectl set-timezone UTC
        sudo localectl set-locale LANG=C.UTF-8 LANGUAGE="en_US:en"

        # Set sysctl
        sudo sysctl -w vm.max_map_count=262144
        echo "vm.max_map_count = 262144" | sudo tee -a /etc/sysctl.conf

        # Install docker
        sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
        sudo apt-get update
        sudo apt-get install docker-ce -y
        sudo usermod -aG docker $USER
        sudo systemctl enable docker
        sudo systemctl daemon-reload
        sudo systemctl start docker
EOT

end
