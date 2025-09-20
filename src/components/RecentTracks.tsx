import React from 'react';
 import { useAudio } from '@/contexts/useAudio';

const RecentTracks: React.FC = () => {
  const { playerState } = useAudio();

  // Ici, si tu as un tableau complet de tracks dans ton state,
  // tu le récupères. Sinon, on affiche juste la track courante comme exemple.
  // Exemple simple : 1 track courante + placeholder pour les précédentes
  const tracksToDisplay = (playerState.recentTracks || []).slice(1);

  // On enlève la chanson en cours si tu veux :
 

  return (
    <div className="w-full mt-6 px-4">
      <h2 className="text-black text-lg font-semibold mb-3 text-center">
        Historique des chansons récentes
      </h2>

      {tracksToDisplay.length === 0 ? (
        <div className="w-full text-center text-black text-sm py-4 bg-white/5 rounded-lg">
          Les titres récents apparaîtront ici dès que la lecture commencera
        </div>
      ) : (
        <div className="space-y-3">
          {tracksToDisplay.map((track, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white rounded-lg shadow p-2"
            >
              {track.coverUrl && (
                <img
                  src={track.coverUrl}
                  alt={track.title}
                  className="w-12 h-12 rounded object-cover"
                />
              )}
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">
                  {track.title}
                </p>
                <p className="text-xs text-gray-600">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentTracks;
