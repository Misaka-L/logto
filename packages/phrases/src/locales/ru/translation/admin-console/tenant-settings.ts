const tenant_settings = {
  title: 'Настройки',
  description:
    'Измените настройки своей учетной записи и управляйте своей личной информацией здесь, чтобы обеспечить безопасность своей учетной записи.',
  tabs: {
    settings: 'Настройки',
    domains: 'Домены',
  },
  profile: {
    title: 'НАСТРОЙКА ПРОФИЛЯ',
    tenant_id: 'ID арендатора',
    tenant_name: 'Имя арендатора',
    environment_tag: 'Тег окружения',
    environment_tag_description:
      'Используйте теги для различения окружений использования арендаторов. Сервисы в каждом теге идентичны, обеспечивая согласованность.',
    environment_tag_development: 'Разработка',
    environment_tag_staging: 'Стадия',
    environment_tag_production: 'Производство',
  },
  deletion_card: {
    title: 'УДАЛИТЬ',
    tenant_deletion: 'Удаление арендатора',
    tenant_deletion_description:
      'Удаление вашей учетной записи приведет к удалению всех ваших личных данных, данных пользователя и настроек. Это действие нельзя отменить.',
    tenant_deletion_button: 'Удалить арендатора',
  },
};

export default tenant_settings;
