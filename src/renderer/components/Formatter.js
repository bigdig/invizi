/*
Copyright (C) 2018-2020 AI Atelier Ltd.

This file is part of Invizi.

Invizi is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

Invizi is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with Invizi.  If not, see <https://www.gnu.org/licenses/>.
*/
const _ = require('lodash')

let Formatter = {
  run (data, formatDefinition) {
    var result = _.cloneDeep(data)
    _.each(_.keys(formatDefinition), function (key) {
      if (result[key] && formatDefinition[key]) {
        result[key] = formatDefinition[key](result[key])
      }
    })
    return result
  },

  runBulk (array, formatDefinition) {
    return _.map(array, function (object) {
      return Formatter.run(object, formatDefinition)
    })
  }
}

export default Formatter
