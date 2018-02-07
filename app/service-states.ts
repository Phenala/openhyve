
export class TaskStatusData {

    public static status =  [{
    name: 'Waiting',
    title: 'Show Waiting only',
    reference: 'waiting',
    icon: 'waiting-icon'
  },
  {
    name: 'In progress',
    title: 'Show In Progress only',
    reference: 'inprogress',
    icon: 'progress-icon'
  },
  {
    name: 'Pending Evaluation',
    title: 'Show Pending Evaluation only',
    reference: 'pendingEvaluation',
    icon: 'pending-eval-icon'
  },
  {
    name: 'Pending Revision',
    title: 'Show Pending Revision only',
    reference: 'pendingRevision',
    icon: 'pending-revision-icon'
  },
  {
    name: 'Completed',
    title: 'Show Completed only',
    reference: 'completed',
    icon: 'tick-icon'
  }];

}
