const UserRoles = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};

const AvailableUserRoles = Object.values(UserRoles);

const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

const AvailableTaskStatuses = Object.values(TaskStatusEnum);

export { UserRoles, AvailableUserRoles, TaskStatusEnum, AvailableTaskStatuses };
