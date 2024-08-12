type RawTask = [string, string, number, number, number]

export interface Task {
  uuid: string
  title: string
  creationDate: number // Convert Unix timestamp to Date object
  userModificationDate: number // Convert Unix timestamp to Date object
  status: number
}

export const readTasks = async (thingsArrBuffer: ArrayBuffer) => {
  const host = logseq.Experiments.ensureHostScope()

  try {
    const SQL = await host.initSqlJs({
      locateFile: (file: any) => {
        return `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
      },
    })

    const db = new SQL.Database(thingsArrBuffer)

    // trashed = 0: not trashed
    // status = 0: not done
    // startt = 1: today
    const query = `
SELECT 
    uuid,
    title,
    creationDate,
    userModificationDate,
    status
FROM 
    TMTask
WHERE 
    trashed = 0
    AND status = 0
    AND start = 1
    AND project IS NULL
    AND area IS NULL
ORDER BY 
    creationDate DESC
  `

    const queryResults = db.exec(query)
    if (!queryResults || !queryResults[0] || !queryResults[0].values) {
      return []
    }

    // Map results
    const tasks: Task[] = queryResults[0].values.map((row: RawTask) => ({
      uuid: row[0],
      title: row[1],
      creationDate: new Date(row[2] * 1000),
      userModificationDate: new Date(row[3] * 1000),
      status: row[4],
    }))

    // Close the database
    db.close()

    return tasks
  } catch (error) {
    console.error(error)
    throw new Error('Error retrieving tasks')
  }
}
