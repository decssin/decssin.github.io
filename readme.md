# Keep It Super Simple



### ___gitmoji___

| emoji | typo | expl |
|:-----:|:----:|:-----|
| ✨ | `:sparkles:`             | Introduce new features. |
| 💥 | `:boom:`                 | Introduce breaking changes. |
| ✅ | `:white_check_mark:`     | Add or update tests. |
| 🍱 | `:bento:`                | Add or update assets. |
| 💫 | `:dizzy:`                | Add or update animations and transitions. |
| 🔧 | `:wrench:`               | Add or update configuration files. |
| 🔨 | `:hammer:`               | Add or update development scripts. |
| 📝 | `:memo:`                 | Add or update documentation. |
| 📄 | `:page_facing_up:`       | Add or update license. |
| 💡 | `:bulb:`                  | Add or update comments in source code. |
| 💬 | `:speech_balloon:`       | Add or update text and literals. |
| 🔊 | `:loud_sound:`           | Add or update logs. |
| 🙈 | `:see_no_evil:`          | Add or update a .gitignore file. |
| 🎨 | `:art:`                  | Improve structure / format of the code. |
| ⚡️ | `:zap:`                  | Improve performance. |
| ♿️ | `:wheelchair:`           | Improve accessibility. |
| 🚸 | `:children_crossing:`    | Improve user experience / usability. |
| 🔍 | `:mag:`                  | Improve SEO. |
| 🐛 | `:bug:`                  | Fix a bug. |
| 🔒 | `:lock:`                 | Fix security issues. |
| 🚨 | `:rotating_light:`       | Fix compiler / linter warnings. |
| 🩹 | `:adhesive_bandage:`     | Fix for a non-critical issue. |
| ♻️ | `:recycle:`              | Refactor code. |
| 🔥 | `:fire:`                 | Remove code or files. |
| 🌐 | `:globe_with_meridians:` | Internationalization and localization. |
| 🚚 | `:truck:`                | Move or rename resources (e.g.: files, paths, routes). |
| 🗃 | `:card_file_box:`         | Perform database related changes. |
| 🔇 | `:mute:`                 | Remove logs. |
| 🛂 | `:passport_control:`     | Work on code related to authorization, roles and permissions. |
| 🗑 | `:wastebasket:`           | Deprecate code that needs to be cleaned up. |



### ___ubuntu upgrade___

```ubuntu
$ apt update
$ apt upgrade
$ apt full-upgrade
$ apt autoremove
$ apt autoclean
$ apt clean
```


### ___ubuntu swap disk___

```ubuntu
Verify Swapfile Existence
$ sudo free -m

Verify Swap Settings
$ sudo swapon -s

Create Swapfile
$ sudo fallocate -l 2G /swapfile

Modify swapfile permissions
$ sudo chmod 600 /swapfile

Set the file to be swap
$ sudo mkswap /swapfile

Enable Swap
$ sudo swapon /swapfile

Enable swap activation after reboot
$ sudo vim /etc/fstab
  Add content to bottom of file -> /swapfile swap swap defaults 0 0
```